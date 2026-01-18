import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FavoriteIcon from '@mui/icons-material/Favorite';

const stats = [
  { label: 'Projects', value: '50+', icon: <CodeIcon sx={{ fontSize: 40 }} />, color: '#667eea' },
  { label: 'Contributions', value: '441+', icon: <TerminalIcon sx={{ fontSize: 40 }} />, color: '#764ba2' },
  // { label: 'Coffee Cups', value: '∞', icon: <LocalCafeIcon sx={{ fontSize: 40 }} />, color: '#f093fb' },
  // { label: 'Happy Clients', value: '18+', icon: <FavoriteIcon sx={{ fontSize: 40 }} />, color: '#ff6b6b' },
];

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: (theme) => theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
        backgroundImage: (theme) => theme.palette.mode === 'dark' 
          ? `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `
          : 'none',
        backgroundSize: '40px 40px',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {stats.map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      cursor: 'pointer',
                      flexDirection: 'column',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: stat.color,
                        boxShadow: `0 8px 24px ${stat.color}20`,
                      },
                    }}
                  >
                    <Box sx={{ color: stat.color, mb: 1 }}>
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Stats;

