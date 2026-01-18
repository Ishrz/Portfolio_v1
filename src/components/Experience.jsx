import React from 'react';
import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const experiences = [
  {
    type: 'work',
    title: 'HulkHire solution',
    // company: 'Tech Company Inc.',
    period: 'Intern Backend developer',
    description: 'Leading frontend development initiatives, mentoring junior developers, and architecting scalable React applications.',
    icon: <WorkIcon />,
  },
  {
    type: 'education',
    title: 'AIMS Pune, SPPU Pune',
    company: 'CGPA: 9.04',
    period: 'Master of Computer Application ',
    // description: 'Graduated with honors, focused on web development and software engineering principles.',
    icon: <SchoolIcon />,
  },
  {
    type: 'education',
    title: 'M.J College Jalgaon,NMU university',
    company: 'CGPA: 9.04',
    period: 'Bachelor of Computer Application ',
    // description: 'Graduated with honors, focused on web development and software engineering principles.',
    icon: <SchoolIcon />,
  },
  
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Box
      ref={ref}
      component="section"
      id="experience"
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
                Experience & Education
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

            <Box
              sx={{
                position: 'relative',
                pl: { xs: 4, md: 6 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: { xs: 20, md: 24 },
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : '#1a1a1a',
                },
              }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.type}-${index}`}
                  variants={itemVariants}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      mb: 4,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: -28, md: -32 },
                        top: 0,
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: (theme) => theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.2)' 
                          : '#1a1a1a',
                        border: '3px solid',
                        borderColor: 'background.default',
                        zIndex: 1,
                        boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.1)',
                      }}
                    />
                    <Stack
                      direction={{ xs: 'column', md: 'row' }}
                      spacing={3}
                    >
                      <Box
                        sx={{
                          width: { xs: '100%', md: '30%' },
                          display: 'flex',
                          alignItems: { xs: 'flex-start', md: 'center' },
                        }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            background: (theme) => theme.palette.mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.05)' 
                              : 'rgba(0, 0, 0, 0.02)',
                            border: '1px solid',
                            borderColor: (theme) => theme.palette.mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.1)' 
                              : 'rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            width: '100%',
                          }}
                        >
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              background: (theme) => theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.2)' 
                                : '#1a1a1a',
                              color: (theme) => theme.palette.mode === 'dark' ? '#1a1a1a' : 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {exp.icon}
                          </Box>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                              {exp.period}
                            </Typography>
                          </Box>
                        </Paper>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            background: (theme) => theme.palette.mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.02)' 
                              : 'rgba(0, 0, 0, 0.01)',
                            border: '1px solid',
                            borderColor: (theme) => theme.palette.mode === 'dark' 
                              ? 'rgba(255, 255, 255, 0.1)' 
                              : 'rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateX(8px)',
                              borderColor: (theme) => theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.2)' 
                                : 'rgba(0, 0, 0, 0.2)',
                              boxShadow: (theme) => theme.palette.mode === 'dark' 
                                ? '0 10px 30px rgba(255, 255, 255, 0.1)' 
                                : '0 10px 30px rgba(0, 0, 0, 0.1)',
                            },
                          }}
                        >
                          <Stack spacing={1}>
                            <Typography
                              variant="h5"
                              sx={{
                                fontWeight: 700,
                                color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 500,
                              }}
                            >
                              {exp.company}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'text.secondary',
                                lineHeight: 1.7,
                                mt: 1,
                              }}
                            >
                              {exp.description}
                            </Typography>
                          </Stack>
                        </Paper>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;

