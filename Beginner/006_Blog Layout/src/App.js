import React from 'react';
import { ThemeProvider, CssBaseline, Container, Grid } from '@mui/material';
import blogTheme from './theme/blogTheme';
import BlogHeader from './components/BlogHeader';
import BlogPost from './components/BlogPost';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Sample blog post data
const samplePost = {
  title: 'Getting Started with Material-UI in React',
  author: 'John Doe',
  date: 'December 1, 2024',
  category: 'React',
  image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  content: `Material-UI is a popular React UI framework that implements Google's Material Design. 
            It provides a comprehensive suite of UI tools to help you ship new features faster.
            
            In this tutorial, we'll explore how to set up Material-UI in your React project, 
            customize themes, and create beautiful, responsive layouts. We'll cover everything 
            from basic components to advanced theming techniques.
            
            One of the key benefits of Material-UI is its theming system. You can easily 
            customize colors, typography, and component styles to match your brand identity. 
            The framework also provides excellent TypeScript support and accessibility features.`,
  authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  authorBio: 'Senior Frontend Developer with 5+ years of experience in React and modern web technologies.',
};

function App() {
  return (
    <ThemeProvider theme={blogTheme}>
      <CssBaseline />
      
      {/* Header */}
      <BlogHeader />
      
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Grid container spacing={4}>
          {/* Blog Posts */}
          <Grid item xs={12} md={8}>
            <BlogPost post={samplePost} />
            
            {/* You can add more BlogPost components here */}
            {/* <BlogPost post={anotherPost} /> */}
          </Grid>
          
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
      
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;