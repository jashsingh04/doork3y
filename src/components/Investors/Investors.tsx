import React from 'react';
import { Box, Container } from '@mui/material';
import SectionHeader from '../common/SectionHeader/SectionHeader.tsx';
import SectionTitle from '../common/SectionTitle/SectionTitle.tsx';

const Investors = () => {
  return (
    <Box sx={{ bgcolor: "#f5fff3", py: 10 }}>
      <Container maxWidth="xl">
        <SectionHeader title="Investors" />
        <SectionTitle children={"Meet Our Community"} />
      </Container>
    </Box>
  );
};

export default Investors; 