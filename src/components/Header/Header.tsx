import React, { useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Stack, 
  Toolbar, 
  Typography 
} from '@mui/material';
import logoImage from '../../assets/doorkey_logo.png';

const Header = () => {
  useEffect(() => {
    console.log('Logo image path:', logoImage);
  }, []);

  // Navigation items
  const navItems = ["About Us", "Products", "Contact"];

  return (
    <AppBar position="static" sx={{ bgcolor: "#0A2890", boxShadow: 0 }}>
      <Toolbar sx={{ height: 80, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={logoImage}
            alt="Doorkey Logo"
            sx={{
              height: 48,
              width: 'auto',
              mr: 2,
              display: 'block' // Ensure it's displayed as block
            }}
            onError={(e) => {
              console.error('Error loading logo:', e);
              // Fallback text if image fails to load
              const imgElement = e.target as HTMLImageElement;
              imgElement.outerHTML = '<div style="height:48px;width:120px;background:#0A2890;color:#fff;display:flex;align-items:center;justify-content:center;margin-right:16px;">DoorKey</div>';
            }}
          />
        </Box>

        <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: "1rem",
                cursor: "pointer",
                '&:hover': {
                  color: '#e0e0e0'
                }
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: "#FFFFFF",
              mr: 3,
              fontWeight: 400,
              fontSize: "0.875rem",
              cursor: "pointer",
              '&:hover': {
                color: '#e0e0e0'
              }
            }}
          >
            Log in
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFFFFF",
              color: "#0A2890",
              borderRadius: "4px",
              fontWeight: 600,
              px: 2,
              py: 0.75,
              fontSize: "0.875rem",
              textTransform: "none",
              '&:hover': {
                bgcolor: '#e0e0e0'
              }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;