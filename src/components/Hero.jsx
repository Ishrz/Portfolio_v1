import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import CircleIcon from '@mui/icons-material/Circle';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [displayText, setDisplayText] = useState('');
  const fullText = 'Frontend Developer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

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
    <Box
      ref={ref}
      component="section"
      id="home"
      sx={{
        // marginTop:'10px',
        paddingTop:'10px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#1a1a1a',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '100%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          animation: 'float 20s ease-in-out infinite',
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-30px, -30px) rotate(180deg)' },
        },
        '@keyframes pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        '@keyframes blink': {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
           

            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem', lg: '6.5rem' },
                  fontWeight: 800,
                  color: 'white',
                  mb: 2,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #fff 0%, #f0f0f0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color:'white',
                    backgroundClip: 'text',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  Shaikh M.Ahamad
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontWeight: 600,
                  minHeight: '3rem',
                }}
              >
                I'm a{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'white',
                    borderRight: '3px solid white',
                    paddingRight: '4px',
                    animation: showCursor ? 'blink 1s infinite' : 'none',
                  }}
                >
                  {displayText}
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  mb: 3,
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <CircleIcon 
                  sx={{ 
                    fontSize: 8, 
                    color: '#46d160',
                    animation: 'pulse 2s infinite',
                  }} 
                />
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 500, fontSize: '0.95rem' }}>
                  Currently working on: Backend
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <CodeIcon sx={{ color: 'white', fontSize: '2rem', opacity: 0.9 }} />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
                >
                  <PaletteIcon sx={{ color: 'white', fontSize: '2rem', opacity: 0.9 }} />
                </motion.div>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '700px',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                A passionate Frontend Developer crafting beautiful, intuitive, and performant digital experiences
                that users love.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection('projects')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      background: 'white',
                      color: '#1a1a1a',
                      textTransform: 'none',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      '&:hover': {
                        background: '#f5f5f5',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      borderColor: 'white',
                      borderWidth: 2,
                      color: 'white',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255,255,255,0.1)',
                        borderWidth: 2,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>

            <motion.div
              variants={itemVariants}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Button
                onClick={() => scrollToSection('about')}
                sx={{
                  color: 'white',
                  mt: 4,
                  '&:hover': {
                    background: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <KeyboardArrowDownIcon sx={{ fontSize: '2.5rem' }} />
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;

