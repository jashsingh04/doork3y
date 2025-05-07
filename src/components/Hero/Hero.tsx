import React from 'react';
import { Box, Container, Divider, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #0A2890 0%, #0C44B8 100%)",
        position: "relative",
        pt: 6,
        pb: 10,
        minHeight: 600,
        overflow: "hidden"
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ position: "relative", mb: 2 }}>
          <Box
            sx={{
              border: "1px solid #e7f1ff",
              borderRadius: "23.5px",
              width: 155,
              height: 32,
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: "0.75rem",
              }}
            >
              Investment Network
            </Typography>
          </Box>
        </Box>

        <Box sx={{ maxWidth: 650, mb: 4 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontWeight: 300,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            Connect your{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              groundbreaking startup
            </Box>{" "}
            to{" "}
            <Box
              component="span"
              sx={{ fontWeight: 700 }}
            >
              visionary investors
            </Box>{" "}
            today.
          </Typography>
          
          <Box sx={{ display: 'flex', mt: 3, flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
              Realize solutions
            </Typography>
            <Typography variant="body2" sx={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
              Connect with leaders
            </Typography>
            <Typography variant="body2" sx={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
              Engage in partnerships
            </Typography>
          </Box>
          
          <Button 
            variant="contained"
            sx={{ 
              mt: 3, 
              bgcolor: "#FFFFFF", 
              color: "#0C44B8",
              fontWeight: 600,
              borderRadius: "4px",
              py: 1,
              px: 3,
              textTransform: "uppercase",
              fontSize: "0.875rem",
              "&:hover": {
                bgcolor: "#e0e0e0",
              }
            }}
          >
            GET STARTED
          </Button>
        </Box>
      </Container>

      {/* Decorative elements */}
      <Box 
        sx={{ 
          position: "absolute", 
          right: 40, 
          top: 80, 
          width: 8, 
          height: 8, 
          borderRadius: "50%", 
          bgcolor: "#FFFFFF" 
        }} 
      />
      <Box 
        sx={{ 
          position: "absolute", 
          left: "10%", 
          bottom: "20%", 
          width: 8, 
          height: 8, 
          borderRadius: "50%", 
          bgcolor: "#FFFFFF" 
        }} 
      />
      <Box 
        sx={{ 
          position: "absolute", 
          right: "20%", 
          bottom: "40%", 
          width: 4, 
          height: 4, 
          borderRadius: "50%", 
          bgcolor: "#FFFFFF" 
        }} 
      />
      
      {/* Door illustration */}
      <Box 
        sx={{ 
          position: "absolute", 
          right: { xs: "5%", md: "10%" }, 
          bottom: 0,
          width: { xs: 150, md: 200 },
          height: { xs: 180, md: 240 },
          bgcolor: "#FFFFFF",
          borderRadius: "4px 4px 0 0",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <Box 
          sx={{ 
            width: "70%", 
            height: "100%", 
            position: "relative",
            bgcolor: "#E7F1FF",
            transform: "perspective(400px) rotateY(-20deg)",
            transformOrigin: "left",
            boxShadow: "2px 0 10px rgba(0,0,0,0.2)"
          }}
        >
          <Box 
            sx={{ 
              position: "absolute", 
              left: "70%", 
              top: "50%", 
              width: 6, 
              height: 6, 
              borderRadius: "50%", 
              bgcolor: "#0A2890" 
            }} 
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;