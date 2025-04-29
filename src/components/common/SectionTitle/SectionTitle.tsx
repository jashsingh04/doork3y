import React from 'react';
import { Typography } from '@mui/material';
import { SectionTitleProps } from '../../../types';

const SectionTitle = ({
  children,
  color = "#063088",
  fontSize = "4rem",
  fontWeight = 700,
  fontFamily = "'Inter-Bold', Helvetica",
  ...rest
}: SectionTitleProps) => {
  return (
    <Typography
      variant="h2"
      sx={{
        color,
        fontFamily,
        fontWeight,
        fontSize,
        textAlign: "center",
        my: 4,
        ...(rest.sx || {})
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle; 