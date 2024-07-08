import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AboutImagesection from './AboutImagesection';
import aboutUsImage from '../images/AboutUs-image-2.jpg';
import backgroundImage from '../images/Background.jpg';

const aboutUsContainerStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden', // Ensure the pseudo-element stays within the container
  padding: '80px 0',
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
  background: 'rgba(255, 255, 255, 0.6)', // Semi-transparent background
  borderRadius: '16px',
  padding: '40px', // Add padding inside the content box
};

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={aboutUsContainerStyle}>
      <div style={glassEffectStyle} />
      <Container maxWidth="lg" sx={{ marginBottom: '140px', ...contentStyle }}>
        <Typography variant="h2" gutterBottom sx={{ color: '#4CAF50' }}>
          {t('about_us_text')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              {t('about_us_vision')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              {t('about_us_paragraph')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <AboutImagesection imageUrl={aboutUsImage} />
    </Box>
  );
};

export default AboutUs;
