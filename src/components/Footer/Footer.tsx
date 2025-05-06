import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  const footerLinks = [
    {
      items: ["About Us", "Our Services", "Contact Us", "Career"],
    },
    {
      items: ["Terms & Conditions", "Privacy Policy", "FAQ", "Blog"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f6fff4", py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -2 }}>
          {footerLinks.map((column, index) => (
            <Box key={index} sx={{ width: '50%', px: 2 }}>
              {column.items.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: "0.875rem",
                    color: "#839aff",
                    mb: 1.5,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#0c44b8",
            mt: 4,
          }}
        >
          &copy; 2025 DoorKey. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;