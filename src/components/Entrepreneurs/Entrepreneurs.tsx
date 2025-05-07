import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Divider } from '@mui/material';

const entrepreneursData = [
  {
    id: 1,
    name: "Entrepreneur 1",
    industry: "Industry",
    details: "Description of project"
  },
  {
    id: 2,
    name: "Entrepreneur 2",
    industry: "Industry",
    details: "Description of project"
  },
  {
    id: 3,
    name: "Entrepreneur 3",
    industry: "Industry",
    details: "Description of project"
  }
];

const Entrepreneurs = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", py: 8 }}>
      <Container maxWidth="xl">
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
            Entrepreneurs
          </Typography>
          <Divider sx={{ mb: 3 }} />
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {entrepreneursData.map((entrepreneur) => (
            <Card key={entrepreneur.id} sx={{ 
              maxWidth: 270,
              minHeight: 260,
              borderRadius: 2, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}>
              <CardContent sx={{ pt: 2, pb: 2 }}>
                <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.75rem", mb: 0.5 }}>
                  {entrepreneur.industry}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.75rem", mb: 1 }}>
                  {entrepreneur.details}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
                  {entrepreneur.name}
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

export default Entrepreneurs;