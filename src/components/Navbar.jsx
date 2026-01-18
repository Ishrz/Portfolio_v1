import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, Container, useScrollTrigger, Slide, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

const navItems = [
  { name: 'Home', id: 'home', icon: <HomeIcon /> },
  { name: 'About', id: 'about', icon: <PersonIcon /> },
  { name: 'Skills', id: 'skills', icon: <CodeIcon /> },
  { name: 'Projects', id: 'projects', icon: <FolderIcon /> },
  { name: 'Experience', id: 'experience', icon: <WorkIcon /> },
  { name: 'Contact', id: 'contact', icon: <EmailIcon /> },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled 
            ? (darkMode ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease',
          marginBottom:'10px',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="span"
                onClick={() => scrollToSection('home')}
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: scrolled 
                    ? (darkMode ? '#ffffff' : '#1a1a1a')
                    : 'white',
                  cursor: 'pointer',
                  mr: 4,
                }}
              >
                <i>Shaykh</i>
              </Box>
            </motion.div>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.id)}
                    startIcon={item.icon}
                    sx={{
                      color: scrolled 
                        ? (darkMode 
                          ? (activeSection === item.id ? '#ffffff' : '#b0b0b0')
                          : (activeSection === item.id ? '#1a1a1a' : '#4a5568'))
                        : 'white',
                      fontWeight: activeSection === item.id ? 600 : 400,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: activeSection === item.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                        width: '60%',
                        height: '2px',
                        background: scrolled 
                          ? (darkMode ? '#ffffff' : '#1a1a1a')
                          : 'white',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover': {
                        color: scrolled 
                          ? (darkMode ? '#ffffff' : '#1a1a1a')
                          : 'rgba(255,255,255,0.9)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                sx={{
                  color: scrolled 
                    ? (darkMode ? '#ffffff' : '#1a1a1a')
                    : 'white',
                }}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </motion.div>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;

