import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
  TextField,
} from "@mui/material";

// Simple section header component
export const SectionHeader = ({
  title,
  color = "#0c43b6",
  bgColor = "#0c44b8",
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
      <Typography
        variant="h4"
        sx={{
          color: color,
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

// Simple section title component
export const SectionTitle = ({ children, color = "#063088" }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        color,
        fontFamily: "'Inter-Bold', Helvetica",
        fontWeight: 700,
        fontSize: "4rem",
        textAlign: "center",
        my: 4,
      }}
    >
      {children}
    </Typography>
  );
};

// Header component
export const Header = () => {
  const navItems = ["Home", "About Us", "Contact"];
  const placeholderLogo = "https://via.placeholder.com/130";

  return (
    <Box
      sx={{
        bgcolor: "#030e27",
        boxShadow: 0,
        height: 125,
        display: "flex",
        alignItems: "center",
        px: 3,
      }}
    >
      <Box
        component="img"
        src={placeholderLogo}
        alt="Doorkey Logo"
        sx={{ width: 130, height: 130, mr: 2 }}
      />

      <Stack direction="row" spacing={3}>
        {navItems.map((item) => (
          <Typography
            key={item}
            variant="h6"
            sx={{
              color: "#f6fff4",
              fontFamily: "'Hanken_Grotesk-Light', Helvetica",
              fontWeight: 300,
              fontSize: "1.5rem",
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      <Typography
        variant="h6"
        sx={{
          color: "#f6fff4",
          mr: 3,
          fontFamily: "'Hanken_Grotesk-Light', Helvetica",
          fontWeight: 300,
          fontSize: "1.5rem",
        }}
      >
        Log in
      </Typography>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#0c44b8",
          borderRadius: "18.5px",
          width: 196,
          height: 58,
          fontFamily: "'Hanken_Grotesk-Light', Helvetica",
          fontWeight: 300,
          fontSize: "1.5rem",
          textTransform: "none",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

// Hero component
export const Hero = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(3,15,39,1) 0%, rgba(9,76,219,1) 100%)",
        height: 600,
        position: "relative",
        pt: 10,
        px: 3,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          sx={{
            color: "#e7f1ff",
            fontFamily: "'Inter-Light', Helvetica",
            fontWeight: 300,
            fontSize: "4rem",
            maxWidth: 1254,
            mb: 10,
          }}
        >
          Connect your groundbreaking startup to visionary investors today.
        </Typography>
      </Container>
    </Box>
  );
};

// AboutUs component
export const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "#f5fff3", py: 10, px: 3 }}>
      <Container maxWidth="xl">
        <SectionHeader title="About Us" />
        <Typography
          variant="body1"
          sx={{
            color: "#07328d",
            fontFamily: "'Inter-Regular', Helvetica",
            fontWeight: 400,
            fontSize: "1.8rem",
            mb: 5,
          }}
        >
          In the fast-moving startup world, too many great ideas stall — not
          from lack of vision, but from lack of the right connections. Doorkey
          is here to change that.
        </Typography>
      </Container>
    </Box>
  );
};

// Investors component
export const Investors = () => {
  return (
    <Box sx={{ bgcolor: "#f5fff3", py: 10, px: 3 }}>
      <Container maxWidth="xl">
        <SectionHeader title="Investors" />
        <SectionTitle>Meet Our Community</SectionTitle>
      </Container>
    </Box>
  );
};

// Entrepreneurs component
export const Entrepreneurs = () => {
  return (
    <Box sx={{ bgcolor: "#f5fff3", py: 10, px: 3 }}>
      <Container maxWidth="xl">
        <SectionHeader title="Entrepreneurs" />
      </Container>
    </Box>
  );
};

// News component
export const News = () => {
  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 10, px: 3 }}>
      <Container maxWidth="xl">
        <SectionHeader title="NEWS" color="white" bgColor="white" />
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 240 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 240 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ bgcolor: "#f6fff4", height: 240 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// FAQ component
export const FAQ = () => {
  const faqItems = [
    "How does the platform ensure secure communications?",
    "What are the criteria for startup eligibility?",
    "How can investors verify startup credentials?",
    "I am writing Random Words here?",
  ];

  return (
    <Box sx={{ py: 10, px: 3 }}>
      <Container maxWidth="xl">
        <SectionHeader title="FAQ" />
        {faqItems.map((question, index) => (
          <Box key={index} sx={{ borderBottom: "1px solid black", py: 3 }}>
            <Typography
              variant="h4"
              sx={{
                color: "black",
                fontFamily: "'Inter-Light', Helvetica",
                fontWeight: 300,
                fontSize: "1.5rem",
              }}
            >
              {question}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

// Contact component
export const Contact = () => {
  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 10, color: "white", px: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontFamily: "'Inter-Light', Helvetica",
                fontWeight: 300,
                fontSize: "3rem",
                textAlign: "center",
                mb: 4,
              }}
            >
              CONTACT US
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                bgcolor: "#f5fff3",
                p: 4,
                borderRadius: "48px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#0c44b8",
                  fontFamily: "'Inter-SemiBold', Helvetica",
                  fontWeight: 600,
                  fontSize: "2rem",
                  textAlign: "center",
                  mb: 4,
                }}
              >
                GET IN TOUCH WITH US!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#06235d",
                  borderRadius: "16px",
                  mt: 4,
                  px: 3,
                  py: 1,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Send Message
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Footer component
export const Footer = () => {
  const footerLinks = [
    { title: "About", items: ["About", "Careers", "Press"] },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms Of Service", "Cookie Policy"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 5, color: "#f6fff4", px: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {footerLinks.map((column, index) => (
            <Grid item xs={6} key={index}>
              {column.items.map((item, i) => (
                <Typography
                  key={i}
                  variant="h5"
                  sx={{
                    fontFamily: "'Inter-Light', Helvetica",
                    fontWeight: 300,
                    fontSize: "1.5rem",
                    mb: 2,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
