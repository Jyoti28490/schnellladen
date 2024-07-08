import React from 'react';
import { Box } from '@mui/material';
// import aboutUsImage from '../images/AboutUs-image-2.jpg';

// Inline styles for the about us image
const aboutUsBoxStyle: React.CSSProperties = {
  position: 'relative',
  backgroundColor: 'rgba(77, 165, 81, 1)', // Adjust background color to your desired green
  width: '100%',
  height: 'auto',
  margin: '0 auto', // Center horizontally
  padding: '0 120px 80px 120px', // Optional: Add padding for spacing
};

const aboutUsImageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '5%',
  marginTop: '-50px', // Adjust margin top to push image slightly upwards
};

interface AboutImageSectionProps {
  imageUrl: string;
}

const AboutImagesection: React.FC<AboutImageSectionProps> = ({ imageUrl }) => {
  return (
    <Box>
      <Box style={aboutUsBoxStyle}>
        <img src={imageUrl} alt="About Us" style={aboutUsImageStyle} />
      </Box>
    </Box>
  );
};

export default AboutImagesection;
