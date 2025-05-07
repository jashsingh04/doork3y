import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FAQItemProps } from '../../types';

const FAQItem: React.FC<FAQItemProps> = ({ question, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box 
      sx={{ 
        borderBottom: "1px solid #E0E0E0",
        overflow: "hidden",
        py: 2
      }}
    >
      <Box 
        onClick={toggleExpanded}
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          cursor: "pointer",
          py: 1
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#333333",
            fontWeight: 500,
            fontSize: "1rem",
          }}
        >
          {question}
        </Typography>
        <KeyboardArrowDownIcon 
          sx={{ 
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
            color: "#0C44B8"
          }} 
        />
      </Box>
      
      {expanded && (
        <Box sx={{ py: 1.5, pl: 1, pr: 4 }}>
          <Typography variant="body2" sx={{ color: "#666666", fontSize: "0.875rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, 
            sit amet blandit leo lobortis eget.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FAQItem;