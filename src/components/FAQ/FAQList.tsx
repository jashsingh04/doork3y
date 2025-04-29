import React from 'react';
import { Box } from '@mui/material';
import { FAQListProps } from '../../types';
import FAQItem from './FAQItem';

const FAQList: React.FC<FAQListProps> = ({ items }) => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4, px: 2 }}>
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} index={index} />
      ))}
    </Box>
  );
};

export default FAQList; 