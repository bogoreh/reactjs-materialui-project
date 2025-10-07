import { useState, useEffect, useRef } from 'react';

export const useWebSocket = (url) => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);
    
    ws.current.onopen = () => {
      setIsConnected(true);
      console.log('WebSocket connected');
    };

    ws.current.onclose = () => {
      setIsConnected(false);
      console.log('WebSocket disconnected');
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      switch (data.type) {
        case 'message':
          setMessages(prev => [...prev, data]);
          break;
        case 'typing_start':
          setTypingUsers(prev => [...prev.filter(user => user.id !== data.user.id), data.user]);
          break;
        case 'typing_stop':
          setTypingUsers(prev => prev.filter(user => user.id !== data.user.id));
          break;
        case 'user_joined':
        case 'user_left':
          // Handle user join/leave notifications
          break;
        case 'file_uploaded':
          setMessages(prev => [...prev, data]);
          break;
        default:
          break;
      }
    };

    return () => {
      ws.current?.close();
    };
  }, [url]);

  const sendMessage = (message) => {
    if (ws.current && isConnected) {
      ws.current.send(JSON.stringify(message));
    }
  };

  const sendTypingStart = (user) => {
    if (ws.current && isConnected) {
      ws.current.send(JSON.stringify({
        type: 'typing_start',
        user
      }));
    }
  };

  const sendTypingStop = (user) => {
    if (ws.current && isConnected) {
      ws.current.send(JSON.stringify({
        type: 'typing_stop',
        user
      }));
    }
  };

  return {
    isConnected,
    messages,
    typingUsers,
    sendMessage,
    sendTypingStart,
    sendTypingStop
  };
};