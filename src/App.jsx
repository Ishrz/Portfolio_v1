import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#ffffff',
        light: '#f5f5f5',
        dark: '#e0e0e0',
      },
      secondary: {
        main: '#9e9e9e',
        light: '#bdbdbd',
        dark: '#757575',
      },
      background: {
        default: darkMode ? '#1a1a1a' : '#ffffff',
        paper: darkMode ? '#2a2a2a' : '#f8f9fa',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#1a1a1a',
        secondary: darkMode ? '#b0b0b0' : '#4a5568',
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      body1: {
        lineHeight: 1.7,
      },
      body2: {
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

