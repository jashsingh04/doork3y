import React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';

const News = () => {
  return (
    <Box sx={{ bgcolor: "#0C44B8", py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "1rem",
              mb: 1,
            }}
          >
            NEWS
          </Typography>
          <Divider sx={{ width: 40, bgcolor: "#FFFFFF", height: 2, mb: 3 }} />
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ width: { xs: '100%', md: '31%' } }}>
            <Paper sx={{ bgcolor: "#FFFFFF", height: 120, mb: 3 }} />
            <Paper sx={{ bgcolor: "#FFFFFF", height: 180, mb: 3 }} />
            <Paper sx={{ bgcolor: "#FFFFFF", height: 100 }} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '31%' } }}>
            <Paper sx={{ bgcolor: "#FFFFFF", height: 220, mb: 3 }} />
            <Paper sx={{ bgcolor: "#FFFFFF", height: 220 }} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '31%' } }}>
            <Paper sx={{ bgcolor: "#FFFFFF", height: 150, mb: 3 }} />
            <Paper sx={{ bgcolor: "#FFFFFF", height: 120, mb: 3 }} />
            <Paper sx={{ bgcolor: "#FFFFFF", height: 150 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default News;