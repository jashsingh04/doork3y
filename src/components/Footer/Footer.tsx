import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
  // Footer links
  const footerLinks = [
    { title: "About", items: ["About", "Careers", "Press"] },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms Of Service", "Cookie Policy"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 5, color: "#f6fff4" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {footerLinks.map((column, index) => (
            <Grid item xs={6} key={index}>
              {column.items.map((item, i) => (
                <Typography
                  key={i}
                  variant="h5"
                  sx={{
                    fontFamily: "'Inter-Light', Helvetica",
                    fontWeight: 300,
                    fontSize: "2rem",
                    mb: 2,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 