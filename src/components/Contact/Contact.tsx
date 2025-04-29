import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Paper, 
  Stack, 
  TextField, 
  Typography 
} from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 10, color: "white" }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontFamily: "'Inter-Light', Helvetica",
                fontWeight: 300,
                fontSize: "4rem",
                textAlign: "center",
                mb: 4,
              }}
            >
              CONTACT US
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontFamily: "'Inter-Medium', Helvetica",
                fontWeight: 500,
                fontSize: "1.25rem",
                mb: 4,
              }}
            >
              Some fluff about please reach out to us and stuff
            </Typography>
            <Stack direction="row" spacing={2}>
              <LinkedInIcon sx={{ fontSize: 40 }} />
              <TwitterIcon sx={{ fontSize: 40 }} />
            </Stack>
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
                  fontSize: "2.5rem",
                  textAlign: "center",
                  mb: 4,
                }}
              >
                GET IN TOUCH WITH US!
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" sx={{ mb: 1, color: "black" }}>
                    Full name
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: "#d9d9d966",
                      borderRadius: "11px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" sx={{ mb: 1, color: "black" }}>
                    Company
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: "#d9d9d966",
                      borderRadius: "11px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" sx={{ mb: 1, color: "black" }}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: "#d9d9d966",
                      borderRadius: "11px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="body1"
                    sx={{ mb: 1, color: "black" }}
                  ></Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: "#d9d9d966",
                      borderRadius: "11px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ mb: 1, color: "black" }}>
                    Address
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: "#d9d9d966",
                      borderRadius: "11px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ mb: 1, color: "black" }}>
                    Note
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      bgcolor: "#d9d9d966",
                      borderRadius: "11px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#28569c",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#06235d",
                  borderRadius: "16px",
                  mt: 4,
                  px: 3,
                  py: 1,
                  fontFamily: "'Inter-Bold', Helvetica",
                  fontWeight: 700,
                  fontSize: "0.875rem",
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

export default Contact; 