import React from 'react';
import { Box, Container, Typography, Stack, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';

const skills = {
  frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI'],
  tools: ['Git', 'Vite', 'Webpack', 'Figma', 'VS Code', 'Chrome DevTools'],
  design: ['UI/UX Design', 'Responsive Design', 'Prototyping', 'Wireframing'],
};

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      skills: skills.frontend,
      color: '#667eea',
    },
    {
      title: 'Tools & Technologies',
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      skills: skills.tools,
      color: '#764ba2',
    },
    {
      title: 'Design',
      icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
      skills: skills.design,
      color: '#f093fb',
    },
  ];

  return (
    <Box
      ref={ref}
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: (theme) => theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
        backgroundImage: (theme) => theme.palette.mode === 'dark' 
          ? `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `
          : 'none',
        backgroundSize: '40px 40px',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Stack spacing={6}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  textAlign: 'center',
                  mb: 1,
                  color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                }}
              >
                Skills & Technologies
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : '#1a1a1a',
                  mx: 'auto',
                  borderRadius: 2,
                }}
              />
            </motion.div>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={4}
              sx={{ width: '100%' }}
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  style={{ flex: 1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      background: (theme) => theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.05)' 
                        : 'rgba(0, 0, 0, 0.02)',
                      border: '1px solid',
                      borderColor: (theme) => theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)',
                        borderColor: 'rgba(102, 126, 234, 0.3)',
                      },
                    }}
                  >
                    <Stack spacing={3}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, ${category.color}15 0%, ${category.color}25 100%)`,
                            color: category.color,
                          }}
                        >
                          {category.icon}
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {category.title}
                        </Typography>
                      </Box>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Chip
                              label={skill}
                              sx={{
                                background: `linear-gradient(135deg, ${category.color}10 0%, ${category.color}20 100%)`,
                                color: category.color,
                                fontWeight: 500,
                                border: `1px solid ${category.color}30`,
                                '&:hover': {
                                  background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}30 100%)`,
                                },
                              }}
                            />
                          </motion.div>
                        ))}
                      </Stack>
                    </Stack>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;

