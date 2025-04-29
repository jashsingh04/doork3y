import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { FAQItemProps } from '../../types';

const FAQItem: React.FC<FAQItemProps> = ({ question, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper 
      elevation={0}
      sx={{ 
        borderBottom: "1px solid black",
        bgcolor: "transparent",
        borderRadius: 0,
        overflow: "hidden" 
      }}
    >
      <Box 
        onClick={toggleExpanded}
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          py: 3,
          cursor: "pointer"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontFamily: "'Inter-Light', Helvetica",
            fontWeight: 300,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          {question}
        </Typography>
        <ArrowRightIcon 
          sx={{ 
            transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s'
          }} 
        />
      </Box>
      
      {expanded && (
        <Box sx={{ p: 2, pb: 3 }}>
          <Typography>Answer details would go here.</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default FAQItem; 