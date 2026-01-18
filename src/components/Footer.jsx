import React from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: '#1a1a1a',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        color: 'rgba(255, 255, 255, 0.8)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="body2">
              © {currentYear} Shaykh Portfolio. All rights reserved.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Stack direction="row" spacing={3}>
              <Link
                href="#home"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                Home
              </Link>
              <Link
                href="#about"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                About
              </Link>
              <Link
                href="#projects"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                Contact
              </Link>
            </Stack>
          </motion.div>
        </Stack>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
           
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

