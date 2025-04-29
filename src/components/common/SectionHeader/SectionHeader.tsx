import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { SectionHeaderProps } from '../../../types';

const SectionHeader = ({ 
  title, 
  color = "#0c43b6", 
  bgColor = "#0c44b8" 
}: SectionHeaderProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
      <Typography
        variant="h4"
        sx={{
          color,
          fontFamily: "'Inter-Regular', Helvetica",
          fontWeight: 400,
          fontSize: "2.25rem",
          textAlign: "center",
          ...(color === "#0c43b6" && { WebkitTextStroke: "1px #0c44b8" }),
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ flexGrow: 1, ml: 4, bgcolor: bgColor }} />
    </Box>
  );
};

export default SectionHeader; 