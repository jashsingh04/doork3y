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
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#0C44B8",
              fontWeight: 700,
              fontSize: "1.75rem",
              mb: 2,
              textAlign: "center"
            }}
          >
            Meet Our Community
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#0C44B8",
              fontWeight: 500,
              fontSize: "0.875rem",
              mb: 2,
            }}
          >
            Investors
          </Typography>
          <Divider sx={{ mb: 3 }} />
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {investorsData.map((investor) => (
            <Card key={investor.id} sx={{ 
              maxWidth: 270,
              borderRadius: 2, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={investor.image}
                alt={investor.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ pt: 2, pb: 2 }}>
                <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.75rem", mb: 0.5 }}>
                  {investor.role}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.75rem", mb: 1 }}>
                  {investor.details}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
                  {investor.name}
                </Typography>
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
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Investors;