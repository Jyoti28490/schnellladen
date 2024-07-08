import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import backgroundImage from '../images/Background.jpg'; // Replace with your background image path

const ContactUsPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden', // Ensure the pseudo-element stays within the container
    padding: '80px 0',
    marginTop: '50px',
  };

  const glassEffectStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(10px)', // Adjust the blur radius as needed
    opacity: 0.8, // Adjust the opacity for desired transparency
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent background
    borderRadius: '16px',
    padding: '40px', // Add padding inside the content box
    maxWidth: '500px', // Adjust the maximum width of the content box
    margin: '0 auto', // Center the content box horizontally
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box sx={containerStyle}>
      <div style={glassEffectStyle} />
      <Container maxWidth="sm" sx={{ ...contentStyle }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: '#4da551',
              '&:hover': {
                bgcolor: '#3b8642',
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
