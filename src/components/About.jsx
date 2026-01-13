import React from 'react';
import { Box, Container, Typography, Stack, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <Box
      ref={ref}
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Stack spacing={6} alignItems="center">
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  textAlign: 'center',
                  mb: 1,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                About Me
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  mx: 'auto',
                  borderRadius: 2,
                }}
              />
            </motion.div>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={6}
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 200, md: 280 },
                        height: { xs: 200, md: 280 },
                        border: '8px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
                      }}
                    >
                      <PersonIcon sx={{ fontSize: 120 }} />
                    </Avatar>
                  </motion.div>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      opacity: 0.2,
                      zIndex: -1,
                    }}
                  />
                </Box>
              </motion.div>

              <motion.div variants={itemVariants} style={{ flex: 1 }}>
                <Stack spacing={3}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                      color: 'text.secondary',
                    }}
                  >
                    I'm a passionate Frontend Developer with a keen eye for design and a love for creating
                    exceptional user experiences. With expertise in modern web technologies, I transform ideas
                    into beautiful, functional, and responsive web applications.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                      color: 'text.secondary',
                    }}
                  >
                    My approach combines technical excellence with creative problem-solving. I believe in writing
                    clean, maintainable code while ensuring that every pixel serves a purpose and every interaction
                    feels intuitive and delightful.
                  </Typography>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 2 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                        border: '1px solid',
                        borderColor: 'rgba(102, 126, 234, 0.2)',
                        flex: 1,
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOnIcon sx={{ color: 'primary.main' }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          [Your Location]
                        </Typography>
                      </Stack>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                        border: '1px solid',
                        borderColor: 'rgba(102, 126, 234, 0.2)',
                        flex: 1,
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <EmailIcon sx={{ color: 'primary.main' }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          [your.email@example.com]
                        </Typography>
                      </Stack>
                    </Paper>
                  </Stack>
                </Stack>
              </motion.div>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;

