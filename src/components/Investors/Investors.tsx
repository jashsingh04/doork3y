import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Divider } from '@mui/material';

const investorsData = [
  {
    id: 1,
    name: "Sarah Smith Porter",
    role: "Industry Experience",
    details: "Technology",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Amanda Peterson",
    role: "Industry Experience",
    details: "Healthcare",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Dr. Mark Williams",
    role: "Industry Experience", 
    details: "Finance",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const Investors = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", py: 8 }}>
      <Container maxWidth="xl">
        {/* Community section title - moved to top level for better visibility */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#0C44B8",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              mb: 2,
              display: "block",
              width: "100%"
            }}
          >
            Meet Our Community
          </Typography>
        </Box>

        {/* Investors section title */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#0C44B8",
              fontWeight: 500,
              fontSize: "0.875rem",
              mb: 2,
              display: "block",
              width: "100%"
            }}
          >
            Investors
          </Typography>
          <Divider sx={{ mb: 3 }} />
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {investorsData.map((investor) => (
            <Card key={investor.id} sx={{ 
              width: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(33.33% - 16px)" },
              maxWidth: 350,
              borderRadius: 2, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              margin: "0 auto",
              display: "flex",
              flexDirection: "column"
            }}>
              <CardMedia
                component="img"
                height="200"
                image={investor.image}
                alt={investor.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ pt: 2, pb: 2, display: "flex", flexDirection: "column", height: "100%" }}>
                <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.75rem", mb: 0.5 }}>
                  {investor.role}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.75rem", mb: 1 }}>
                  {investor.details}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
                  {investor.name}
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      borderColor: "#0C44B8", 
                      color: "#0C44B8", 
                      borderRadius: 1,
                      fontSize: "0.75rem",
                      textTransform: "none",
                      '&:hover': {
                        borderColor: "#0A2890",
                        backgroundColor: "rgba(12, 68, 184, 0.04)"
                      }
                    }}
                  >
                    Contact
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Investors;