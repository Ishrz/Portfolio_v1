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
        main: darkMode ? '#818cf8' : '#667eea',
        light: darkMode ? '#a5b4fc' : '#818cf8',
        dark: darkMode ? '#6366f1' : '#4c63d2',
      },
      secondary: {
        main: darkMode ? '#a78bfa' : '#764ba2',
        light: darkMode ? '#c4b5fd' : '#9f7aea',
        dark: darkMode ? '#8b5cf6' : '#553c9a',
      },
      background: {
        default: darkMode ? '#0f172a' : '#ffffff',
        paper: darkMode ? '#1e293b' : '#f8f9fa',
      },
      text: {
        primary: darkMode ? '#f1f5f9' : '#1a202c',
        secondary: darkMode ? '#cbd5e1' : '#4a5568',
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

