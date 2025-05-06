import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SectionHeader from '../common/SectionHeader/SectionHeader';

const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "#f5fff3", py: 10 }}>
      <Container maxWidth="xl">
        <SectionHeader title="About Us" />

        <Typography
          variant="body1"
          sx={{
            color: "#07328d",
            fontFamily: "'Inter-Regular', Helvetica",
            fontWeight: 400,
            fontSize: "2.8rem",
            mb: 5,
            maxWidth: 1691,
          }}
        >
          In the fast-moving startup world, too many great ideas stall — not
          from lack of vision, but from lack of the right connections.
          <br />
          Doorkey is here to change that.
          <br />
          <br />
          We've built a platform that instantly connects startups with a
          global network of angel investors, offering seed funding,
          mentorship, and strategic partnerships to fuel your growth.
          <br />
          <br />
          <br />
          <Box
            component="span"
            sx={{
              fontFamily: "'Inter-Bold', Helvetica",
              fontWeight: 700,
              fontSize: "4rem",
            }}
          >
            Big Ideas Meet the Right Opportunities here
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs; 