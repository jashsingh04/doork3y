import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import FAQItem from './FAQItem';

const faqItems = [
  { question: "How does the platform enable secure communications?" },
  { question: "What are the criteria for startup eligibility?" },
  { question: "How can investors verify startup credentials?" },
  { question: "Can startups mention Venture Capital here?" }
];

const FAQList: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#0C44B8",
              fontWeight: 600,
              fontSize: "1rem",
              mb: 1,
            }}
          >
            FAQ
          </Typography>
          <Divider sx={{ width: 40, bgcolor: "#0C44B8", height: 2, mb: 4 }} />
        </Box>
        
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQList;