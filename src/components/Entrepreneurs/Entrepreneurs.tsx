import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Divider, Avatar } from '@mui/material';

const entrepreneursData = [
  {
    id: 1,
    name: "Jessica Chen",
    industry: "Fintech",
    details: "Digital payment solutions for developing markets",
    avatar: "JC"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    industry: "CleanTech",
    details: "Sustainable energy storage solutions",
    avatar: "MJ"
  },
  {
    id: 3,
    name: "Sophia Patel",
    industry: "HealthTech",
    details: "AI-powered diagnostic tools",
    avatar: "SP"
  }
];

const Entrepreneurs = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", py: 8 }}>
      <Container maxWidth="xl">
        {/* Clear section title */}
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
            Entrepreneurs
          </Typography>
          <Divider sx={{ mb: 3 }} />
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {entrepreneursData.map((entrepreneur) => (
            <Box 
              key={entrepreneur.id} 
              sx={{ 
                width: { xs: "100%", sm: "calc(50% - 16px)", md: "calc(33.33% - 16px)" },
                mb: 3
              }}
            >
              <Card sx={{ 
                height: 260,
                borderRadius: 2, 
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'visible',
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: -20,
                  left: 20,
                }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: '#0C44B8', 
                      width: 64, 
                      height: 64,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
                    }}
                  >
                    {entrepreneur.avatar}
                  </Avatar>
                </Box>
                
                <CardContent sx={{ pt: 6, pb: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ 
                      color: '#0C44B8',
                      fontWeight: 600,
                      fontSize: "0.75rem", 
                      mb: 0.5,
                      textTransform: 'uppercase'
                    }}>
                      {entrepreneur.industry}
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      fontSize: '1.125rem'
                    }}>
                      {entrepreneur.name}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: "#333333", 
                      fontSize: "0.875rem",
                      mb: 2,
                      lineHeight: 1.6
                    }}>
                      {entrepreneur.details}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    mt: 'auto', 
                    pt: 2,
                    borderTop: '1px solid #f0f0f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Typography variant="body2" sx={{ 
                      color: "#666666", 
                      fontSize: "0.75rem" 
                    }}>
                      Looking for: $500K - $2M
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
                        padding: "3px 12px",
                        minWidth: "60px",
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
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Entrepreneurs;