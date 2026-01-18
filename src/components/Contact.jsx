import React, { useState } from 'react';
import { Box, Container, Typography, Stack, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

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

  const socialLinks = [
    { icon: <EmailIcon />, label: 'Email', url: 'mailto:your.email@example.com', color: '#667eea' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', url: 'https://linkedin.com', color: '#0077b5' },
    { icon: <GitHubIcon />, label: 'GitHub', url: 'https://github.com', color: '#333' },
    { icon: <TwitterIcon />, label: 'Twitter', url: 'https://twitter.com', color: '#1da1f2' },
  ];

  return (
    <Box
      ref={ref}
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#1a1a1a',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                  color: 'white',
                }}
              >
                Get In Touch
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  background: 'white',
                  mx: 'auto',
                  borderRadius: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.9)',
                  mt: 2,
                  fontWeight: 300,
                }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </Typography>
            </motion.div>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={4}
              sx={{ width: '100%' }}
            >
              <motion.div variants={itemVariants} style={{ flex: 1 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        name="name"
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                      <TextField
                        name="email"
                        label="Your Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                      <TextField
                        name="message"
                        label="Your Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          fullWidth
                          sx={{
                            py: 1.5,
                            borderRadius: '50px',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '1.2rem',
                            background: 'white',
                            color: '#1a1a1a',
                            '&:hover': {
                              background: '#f5f5f5',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Stack>
                  </form>
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants} style={{ flex: 1 }}>
                <Stack spacing={3} sx={{ height: '100%', justifyContent: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Let's Connect
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    Feel free to reach out through any of these channels. I typically respond within 24 hours.
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderColor: 'rgba(255, 255, 255, 0.4)',
                            },
                          }}
                        >
                          <Box sx={{ color: 'white' }}>{social.icon}</Box>
                        </Paper>
                      </motion.a>
                    ))}
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

export default Contact;

