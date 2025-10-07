import React, { useState } from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  Container, 
  Grid, 
  Box, 
  AppBar, 
  Toolbar, 
  Switch,
  FormControlLabel,
  Paper
} from '@mui/material';
import { 
  baseTheme, 
  darkTheme, 
  compactTheme, 
  elegantTheme 
} from './design-system/theme';
import { 
  Button, 
  Card, 
  DisplayText, 
  SectionTitle, 
  GradientText 
} from './design-system/components';
import './App.css';

const ThemeCard = ({ theme, name, description, onSelect, isActive }) => (
  <Card 
    variant={isActive ? 'elevated' : 'outlined'}
    sx={{ 
      cursor: 'pointer', 
      border: isActive ? 2 : 1,
      borderColor: isActive ? 'primary.main' : 'grey.200',
      height: '100%'
    }}
    onClick={onSelect}
  >
    <Box sx={{ p: 2 }}>
      <GradientText variant="h6" gradient={isActive ? 'primary' : 'success'}>
        {name}
      </GradientText>
      <Box sx={{ mt: 1, fontSize: '0.875rem', color: 'text.secondary' }}>
        {description}
      </Box>
      <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          <Button size="small" variant="contained">Button</Button>
          <Button size="small" variant="outlined">Button</Button>
        </Box>
        <Box sx={{ width: '100%', height: 4, bgcolor: 'primary.main', borderRadius: 2 }} />
        <Box sx={{ width: '70%', height: 4, bgcolor: 'secondary.main', borderRadius: 2, mt: 0.5 }} />
      </Box>
    </Box>
  </Card>
);

function App() {
  const [currentTheme, setCurrentTheme] = useState(baseTheme);
  const [themeName, setThemeName] = useState('Light');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themes = [
    {
      name: 'Light',
      theme: baseTheme,
      description: 'Default light theme with modern colors'
    },
    {
      name: 'Dark',
      theme: darkTheme,
      description: 'Dark theme for low-light environments'
    },
    {
      name: 'Compact',
      theme: compactTheme,
      description: 'Space-efficient theme with smaller spacing'
    },
    {
      name: 'Elegant',
      theme: elegantTheme,
      description: 'Sophisticated theme with green primary colors'
    }
  ];

  const handleThemeChange = (theme, name) => {
    setCurrentTheme(theme);
    setThemeName(name);
    setIsDarkMode(name === 'Dark');
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      handleThemeChange(baseTheme, 'Light');
    } else {
      handleThemeChange(darkTheme, 'Dark');
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <GradientText variant="h6" gradient="primary" sx={{ flexGrow: 1 }}>
            Design System
          </GradientText>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                color="primary"
              />
            }
            label="Dark Mode"
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <DisplayText>
            Custom Design System
          </DisplayText>
          <GradientText variant="h5" gradient="primary" sx={{ mt: 2 }}>
            Beautiful, consistent, and accessible components
          </GradientText>
        </Box>

        {/* Theme Selection */}
        <SectionTitle>Theme Variants</SectionTitle>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {themes.map((themeConfig) => (
            <Grid item xs={12} sm={6} md={3} key={themeConfig.name}>
              <ThemeCard
                theme={themeConfig.theme}
                name={themeConfig.name}
                description={themeConfig.description}
                isActive={themeName === themeConfig.name}
                onSelect={() => handleThemeChange(themeConfig.theme, themeConfig.name)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Component Showcase */}
        <SectionTitle>Component Library</SectionTitle>
        <Grid container spacing={4}>
          {/* Buttons */}
          <Grid item xs={12} md={6}>
            <Card 
              header="Buttons" 
              sx={{ height: '100%' }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button variant="contained">Primary</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button variant="text">Text</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="large">Large</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button variant="contained" color="success">Success</Button>
                  <Button variant="contained" color="warning">Warning</Button>
                  <Button variant="contained" color="error">Error</Button>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Cards */}
          <Grid item xs={12} md={6}>
            <Card 
              header="Card Components"
              footer="Card Footer"
              actions={
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small">Action</Button>
                  <Button size="small" variant="outlined">Learn More</Button>
                </Box>
              }
              sx={{ height: '100%' }}
            >
              <Box sx={{ color: 'text.secondary' }}>
                This is an example card with header, content, actions, and footer sections.
                Cards are perfect for displaying related information in a contained format.
              </Box>
            </Card>
          </Grid>

          {/* Typography */}
          <Grid item xs={12}>
            <Card header="Typography Scale">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <DisplayText>Display Text</DisplayText>
                <GradientText variant="h1" gradient="primary">Heading 1</GradientText>
                <GradientText variant="h2" gradient="success">Heading 2</GradientText>
                <GradientText variant="h3" gradient="warning">Heading 3</GradientText>
                <SectionTitle>Section Title</SectionTitle>
                <Box sx={{ color: 'text.primary' }}>Body Text - Regular content</Box>
                <Box sx={{ color: 'text.secondary' }}>Body Text - Secondary content</Box>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Current Theme Info */}
        <Paper sx={{ p: 3, mt: 4, bgcolor: 'background.default' }}>
          <SectionTitle>Current Theme: {themeName}</SectionTitle>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 20, height: 20, bgcolor: 'primary.main', borderRadius: 1 }} />
                <Box>Primary: {currentTheme.palette.primary.main}</Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 20, height: 20, bgcolor: 'secondary.main', borderRadius: 1 }} />
                <Box>Secondary: {currentTheme.palette.secondary.main}</Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 20, height: 20, bgcolor: 'background.paper', border: 1, borderColor: 'grey.300', borderRadius: 1 }} />
                <Box>Background: Paper</Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 20, height: 20, bgcolor: 'text.primary', borderRadius: 1 }} />
                <Box>Text: Primary</Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;