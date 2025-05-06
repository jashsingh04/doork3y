import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import SectionHeader from '../common/SectionHeader/SectionHeader';

const News = () => {
  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 10 }}>
      <Container maxWidth="xl">
        <SectionHeader title="NEWS" color="white" bgColor="white" />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 4, mx: -2 }}>
          <Box sx={{ width: { xs: '100%', md: '33.33%' }, px: 2, mb: 4 }}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 240 }} />
            <Paper sx={{ bgcolor: "#f6fff4", height: 494, mt: 4 }} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '33.33%' }, px: 2, mb: 4 }}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 775 }} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '33.33%' }, px: 2, mb: 4 }}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 369 }} />
            <Paper sx={{ bgcolor: "#f6fff4", height: 369, mt: 4 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default News;