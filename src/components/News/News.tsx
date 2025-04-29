import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import SectionHeader from '../common/SectionHeader/SectionHeader.tsx';

const News = () => {
  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 10 }}>
      <Container maxWidth="xl">
        <SectionHeader title="NEWS" color="white" bgColor="white" />

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 240 }} />
            <Paper sx={{ bgcolor: "#f6fff4", height: 494, mt: 4 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 775 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 369 }} />
            <Paper sx={{ bgcolor: "#f6fff4", height: 369, mt: 4 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default News; 