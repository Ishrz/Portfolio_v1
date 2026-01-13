import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Paper, Button, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImageIcon from '@mui/icons-material/Image';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import VisibilityIcon from '@mui/icons-material/Visibility';

const projects = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A modern, fully responsive e-commerce platform with shopping cart, user authentication, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: <ImageIcon sx={{ fontSize: 200, color: '#667eea', opacity: 0.3 }} />,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Framer Motion'],
    image: <ImageIcon sx={{ fontSize: 200, color: '#764ba2', opacity: 0.3 }} />,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
    image: <ImageIcon sx={{ fontSize: 200, color: '#f093fb', opacity: 0.3 }} />,
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [upvoted, setUpvoted] = useState({});
  const [viewCount] = useState({
    'project-1': 1234,
    'project-2': 856,
    'project-3': 2103,
  });

  const handleUpvote = (projectId) => {
    setUpvoted(prev => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

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
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)',
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
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Featured Projects
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

            <Stack spacing={4}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      overflow: 'hidden',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.15)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Stack
                      direction={{ xs: 'column', md: 'row' }}
                      spacing={0}
                    >
                      <Box
                        sx={{
                          flex: 1,
                          p: 4,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                          position: 'relative',
                          overflow: 'hidden',
                          minHeight: { xs: 200, md: 300 },
                        }}
                      >
                        {project.image}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                          p: 4,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Stack spacing={2}>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <IconButton
                                onClick={() => handleUpvote(project.id)}
                                sx={{
                                  color: upvoted[project.id] ? '#ff4500' : 'text.secondary',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 2,
                                  '&:hover': {
                                    background: upvoted[project.id] ? 'rgba(255, 69, 0, 0.1)' : 'rgba(102, 126, 234, 0.05)',
                                    borderColor: upvoted[project.id] ? '#ff4500' : 'primary.main',
                                  },
                                }}
                              >
                                <ArrowUpwardIcon />
                              </IconButton>
                            </motion.div>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <VisibilityIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                {viewCount[project.id]} views
                              </Typography>
                            </Stack>
                          </Stack>

                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.7,
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ my: 1 }}>
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  background: 'rgba(102, 126, 234, 0.1)',
                                  color: 'primary.main',
                                  fontWeight: 500,
                                  border: '1px solid rgba(102, 126, 234, 0.2)',
                                }}
                              />
                            ))}
                          </Stack>
                          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="contained"
                                startIcon={<LaunchIcon />}
                                href={project.liveUrl}
                                target="_blank"
                                sx={{
                                  borderRadius: '50px',
                                  px: 3,
                                  textTransform: 'none',
                                  fontWeight: 600,
                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                  '&:hover': {
                                    background: 'linear-gradient(135deg, #5568d3 0%, #653a8f 100%)',
                                  },
                                }}
                              >
                                Live Demo
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="outlined"
                                startIcon={<GitHubIcon />}
                                href={project.githubUrl}
                                target="_blank"
                                sx={{
                                  borderRadius: '50px',
                                  px: 3,
                                  textTransform: 'none',
                                  fontWeight: 600,
                                  borderColor: 'primary.main',
                                  color: 'primary.main',
                                  '&:hover': {
                                    borderColor: 'primary.dark',
                                    background: 'rgba(102, 126, 234, 0.05)',
                                  },
                                }}
                              >
                                Code
                              </Button>
                            </motion.div>
                          </Stack>
                        </Stack>
                      </Box>
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

export default Projects;

