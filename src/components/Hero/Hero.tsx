import React from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(3,15,39,1) 0%, rgba(9,76,219,1) 100%)",
        height: 1969,
        position: "relative",
        pt: 10,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ position: "relative", mb: 5 }}>
          <Box
            sx={{
              border: "1px solid #e7f1ff",
              borderRadius: "23.5px",
              width: 249,
              height: 41,
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#e7f1ff",
              fontFamily: "'Inter-Bold', Helvetica",
              fontWeight: 700,
              fontSize: "1.25rem",
              position: "absolute",
              top: 10,
              left: 32,
            }}
          >
            Investment Network
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            color: "#e7f1ff",
            fontFamily: "'Inter-Light', Helvetica",
            fontWeight: 300,
            fontSize: "6rem",
            maxWidth: 1254,
            mb: 10,
          }}
        >
          Connect your{" "}
          <Box
            component="span"
            sx={{
              fontFamily: "'Inter-Bold', Helvetica",
              fontWeight: 700,
              color: "white",
            }}
          >
            groundbreaking startup
          </Box>{" "}
          to{" "}
          <Box
            component="span"
            sx={{ fontFamily: "'Inter-Bold', Helvetica", fontWeight: 700 }}
          >
            visionary investors
          </Box>{" "}
          today.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 10 }}>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              sx={{
                color: "#e7f1ff",
                fontFamily: "'Inter-ExtraLight', Helvetica",
                fontWeight: 200,
                fontSize: "1.5rem",
                WebkitTextStroke: "1px #e7f1ff",
              }}
            >
              Register in minutes
            </Typography>
            <Divider sx={{ bgcolor: "#e7f1ff", width: 76, mt: 2 }} />
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              sx={{
                color: "#e7f1ff",
                fontFamily: "'Inter-ExtraLight', Helvetica",
                fontWeight: 200,
                fontSize: "1.5rem",
                WebkitTextStroke: "1px #e7f1ff",
              }}
            >
              Explore 40+ sectors
            </Typography>
            <Divider sx={{ bgcolor: "#e7f1ff", width: 76, mt: 2 }} />
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              sx={{
                color: "#e7f1ff",
                fontFamily: "'Inter-ExtraLight', Helvetica",
                fontWeight: 200,
                fontSize: "1.5rem",
                WebkitTextStroke: "1px #e7f1ff",
              }}
            >
              Track your investments
            </Typography>
            <Divider sx={{ bgcolor: "#e7f1ff", width: 172, mt: 2 }} />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: 740,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ transform: "rotate(-90deg)", width: 272 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#e7f1ff",
              fontFamily: "'Inter-Light', Helvetica",
              fontWeight: 300,
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            Connect to your best partner
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          sx={{ bgcolor: "#e7f1ff", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Hero; 