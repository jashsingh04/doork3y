import React from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Stack, 
  Toolbar, 
  Typography 
} from '@mui/material';

const placeholderLogo = "https://via.placeholder.com/130";

const Header = () => {
  // Navigation items
  const navItems = ["Home", "About Us", "Contact"];

  return (
    <AppBar position="static" sx={{ bgcolor: "#030e27", boxShadow: 0 }}>
      <Toolbar sx={{ height: 125 }}>
        <Box
          component="img"
          src={placeholderLogo}
          alt="Doorkey Logo"
          sx={{ width: 130, height: 130, mr: 2 }}
        />

        <Stack direction="row" spacing={3}>
          {navItems.map((item) => (
            <Typography
              key={item}
              variant="h6"
              sx={{
                color: "#f6fff4",
                fontFamily: "'Hanken_Grotesk-Light', Helvetica",
                fontWeight: 300,
                fontSize: "1.5rem",
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        <Typography
          variant="h6"
          sx={{
            color: "#f6fff4",
            mr: 3,
            fontFamily: "'Hanken_Grotesk-Light', Helvetica",
            fontWeight: 300,
            fontSize: "1.5rem",
          }}
        >
          Log in
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#0c44b8",
            borderRadius: "18.5px",
            width: 196,
            height: 58,
            fontFamily: "'Hanken_Grotesk-Light', Helvetica",
            fontWeight: 300,
            fontSize: "1.5rem",
            textTransform: "none",
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 