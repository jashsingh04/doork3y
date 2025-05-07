import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  const footerLinks = [
    {
      title: "Support",
      items: ["FAQ", "Help Center", "Contact Us", "Privacy Policy"],
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Blog", "Press"],
    },
    {
      title: "Legal",
      items: ["Terms of Service", "Privacy Policy", "Cookies", "Licenses"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFFFF", py: 6, borderTop: "1px solid #EEEEEE" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 5 }}>
          <Box sx={{ width: { xs: '100%', md: '30%' }, mb: { xs: 4, md: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="img"
                src="/doorkey copy 1.png"
                alt="Doorkey Logo"
                sx={{
                  height: 40,
                  mr: 2
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: "#666666", mb: 2, maxWidth: 250 }}>
              Connect your groundbreaking startup to visionary investors today.
            </Typography>
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '70%' } }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {footerLinks.map((column, index) => (
                <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(33.333% - 16px)' } }}>
                  <Typography sx={{ fontWeight: 600, mb: 2, color: "#333333" }}>
                    {column.title}
                  </Typography>
                  {column.items.map((item, i) => (
                    <Link
                      key={i}
                      href="#"
                      underline="none"
                      sx={{
                        display: 'block',
                        fontSize: "0.875rem",
                        color: "#666666",
                        mb: 1.5,
                        '&:hover': {
                          color: "#0C44B8",
                        }
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 3, borderTop: "1px solid #EEEEEE" }}>
          <Typography
            variant="body2"
            sx={{
              color: "#999999",
              fontSize: "0.75rem",
            }}
          >
            &copy; 2025 DoorKey. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" underline="none" sx={{ color: "#666666", fontSize: "0.75rem" }}>Terms</Link>
            <Link href="#" underline="none" sx={{ color: "#666666", fontSize: "0.75rem" }}>Privacy</Link>
            <Link href="#" underline="none" sx={{ color: "#666666", fontSize: "0.75rem" }}>Cookies</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;