import React from 'react';
import { Box, Container } from '@mui/material';
import SectionHeader from '../common/SectionHeader/SectionHeader.tsx';

const Entrepreneurs = () => {
  return (
    <Box sx={{ bgcolor: "#f5fff3", py: 10 }}>
      <Container maxWidth="xl">
        <SectionHeader title="Entrepreneurs" />
      </Container>
    </Box>
  );
};

export default Entrepreneurs; 