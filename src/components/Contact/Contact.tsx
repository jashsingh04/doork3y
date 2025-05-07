import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography,
  Divider
} from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
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
            CONTACT US
          </Typography>
          <Divider sx={{ width: 40, bgcolor: "#0C44B8", height: 2, mb: 3 }} />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 4 }}>
          <Box sx={{ width: { xs: '100%', md: '42%' } }}>
            <Typography
              variant="h4"
              sx={{
                color: "#333333",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                mb: 3,
              }}
            >
              Get in Touch with Us
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: "#666666",
                mb: 4,
                maxWidth: 400,
                lineHeight: 1.6,
              }}
            >
              Have questions about DoorKey? Interested in partnering with us? Ready to take your startup to the next level? We'd love to hear from you.
            </Typography>
            
            <Box sx={{ display: 'flex', mb: 4 }}>
              <Box sx={{ mr: 5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#333333", mb: 1 }}>
                  Email
                </Typography>
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  contact@doorkey.com
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#333333", mb: 1 }}>
                  Phone
                </Typography>
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  +1 (800) 123-4567
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <LinkedInIcon sx={{ color: "#0C44B8", fontSize: 24 }} />
              <TwitterIcon sx={{ color: "#0C44B8", fontSize: 24 }} />
              <InstagramIcon sx={{ color: "#0C44B8", fontSize: 24 }} />
            </Box>
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '58%' } }}>
            <Box sx={{ 
              p: { xs: 3, md: 4 }, 
              borderRadius: 2, 
              bgcolor: "#F9F9F9",
              border: "1px solid #EEEEEE" 
            }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#333333",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 3,
                }}
              >
                Send us a message
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 3 }}>
                  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <TextField
                      fullWidth
                      label="Full name"
                      variant="outlined"
                      size="small"
                      sx={{
                        bgcolor: "#FFFFFF",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#E0E0E0",
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <TextField
                      fullWidth
                      label="Email address"
                      variant="outlined"
                      size="small"
                      sx={{
                        bgcolor: "#FFFFFF",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#E0E0E0",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    size="small"
                    sx={{
                      bgcolor: "#FFFFFF",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#E0E0E0",
                        },
                      },
                    }}
                  />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    variant="outlined"
                    sx={{
                      bgcolor: "#FFFFFF",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#E0E0E0",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0C44B8",
                  borderRadius: "4px",
                  mt: 3,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textTransform: "none",
                  '&:hover': {
                    bgcolor: "#0A2890"
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;