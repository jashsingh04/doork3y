import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#0C44B8",
              fontWeight: 600,
              fontSize: "1rem",
              mb: 1,
            }}
          >
            About Us
          </Typography>
          <Divider sx={{ width: 40, bgcolor: "#0C44B8", height: 2, mb: 3 }} />
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "#333333",
            fontWeight: 400,
            fontSize: "1rem",
            mb: 2,
            maxWidth: 800,
            lineHeight: 0.5,
          }}
        >
          In the fast-moving startup world, too many great ideas stall — not
          from lack of vision, but from lack of the right connections.
          Doorkey is here to change that.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333333",
            fontWeight: 400,
            fontSize: "1rem",
            mb: 4,
            maxWidth: 800,
            lineHeight: 0.5,
          }}
        >
          We've built a platform that instantly connects startups with a
          global network of angel investors, offering seed funding,
          mentorship, and strategic partnerships to fuel your growth.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: "#0C44B8",
            fontWeight: 700,
            fontSize: "1.75rem",
            mb: 2,
            maxWidth: 800,
          }}
        >
          Big Ideas Meet the Right Opportunities here
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;