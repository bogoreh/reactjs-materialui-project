import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Tab,
  Tabs,
  AppBar,
} from '@mui/material';
import { theme } from './styles/theme';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import Charts from './components/Charts';
import './App.css';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header />
        
        <AppBar 
          position="static" 
          color="default" 
          elevation={1}
          sx={{ bgcolor: 'background.paper' }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                minWidth: 120,
              },
            }}
          >
            <Tab label="Kanban Board" />
            <Tab label="Analytics" />
          </Tabs>
        </AppBar>

        <TabPanel value={tabValue} index={0}>
          <KanbanBoard />
        </TabPanel>
        
        <TabPanel value={tabValue} index={1}>
          <Charts />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}

export default App;