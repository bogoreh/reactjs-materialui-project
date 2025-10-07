import React, { createContext, useContext, useReducer, useEffect } from 'react';

const TradingContext = createContext();

const initialState = {
  price: 0,
  orders: [],
  trades: [],
  connected: false,
  selectedPair: 'BTC/USD',
};

function tradingReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PRICE':
      return { ...state, price: action.payload };
    case 'UPDATE_ORDERS':
      return { ...state, orders: action.payload };
    case 'ADD_TRADE':
      return { 
        ...state, 
        trades: [action.payload, ...state.trades].slice(0, 50) 
      };
    case 'SET_CONNECTED':
      return { ...state, connected: action.payload };
    case 'SET_PAIR':
      return { ...state, selectedPair: action.payload };
    default:
      return state;
  }
}

export function TradingProvider({ children }) {
  const [state, dispatch] = useReducer(tradingReducer, initialState);

  // Mock WebSocket connection
  useEffect(() => {
    const ws = new WebSocket('wss://ws-feed.pro.coinbase.com');
    
    ws.onopen = () => {
      dispatch({ type: 'SET_CONNECTED', payload: true });
      // Subscribe to BTC-USD ticker
      ws.send(JSON.stringify({
        type: 'subscribe',
        product_ids: ['BTC-USD'],
        channels: ['ticker', 'matches']
      }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'ticker' && data.price) {
        dispatch({ type: 'UPDATE_PRICE', payload: parseFloat(data.price) });
      }
      
      if (data.type === 'match') {
        dispatch({ 
          type: 'ADD_TRADE', 
          payload: {
            id: data.trade_id,
            price: parseFloat(data.price),
            amount: parseFloat(data.size),
            side: data.side,
            time: new Date(data.time).toLocaleTimeString(),
          }
        });
      }
    };

    // Generate mock order book data
    const generateOrderBook = () => {
      const basePrice = state.price || 50000;
      const bids = [];
      const asks = [];
      
      for (let i = 0; i < 15; i++) {
        const bidPrice = basePrice * (1 - (i + 1) * 0.001);
        const askPrice = basePrice * (1 + (i + 1) * 0.001);
        
        bids.push({
          price: bidPrice,
          amount: (Math.random() * 2 + 0.5).toFixed(4),
          total: (bidPrice * (Math.random() * 2 + 0.5)).toFixed(2)
        });
        
        asks.push({
          price: askPrice,
          amount: (Math.random() * 2 + 0.5).toFixed(4),
          total: (askPrice * (Math.random() * 2 + 0.5)).toFixed(2)
        });
      }
      
      dispatch({ type: 'UPDATE_ORDERS', payload: { bids, asks } });
    };

    const interval = setInterval(generateOrderBook, 1000);
    
    return () => {
      ws.close();
      clearInterval(interval);
    };
  }, [state.price]);

  return (
    <TradingContext.Provider value={{ state, dispatch }}>
      {children}
    </TradingContext.Provider>
  );
}

export function useTrading() {
  const context = useContext(TradingContext);
  if (!context) {
    throw new Error('useTrading must be used within a TradingProvider');
  }
  return context;
}