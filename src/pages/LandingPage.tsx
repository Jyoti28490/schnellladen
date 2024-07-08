import React from 'react';
import { Box } from '@mui/material';
import landingPageImage from '../images/Landing-Page.jpg';
// import { useTranslation } from 'react-i18next'; // Assuming you use react-i18next for translations
import AboutUs from '../components/AboutUs';
import ImageGallery from '../components/ImageGallery';
import AboutImagesection from '../components/AboutImagesection';
import aboutUsImage from '../images/electric-scooter-2.jpg';
import Quote from '../components/Quote';

const LandingPage: React.FC = () => {
  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    marginTop: '-14px', // Adjust this value based on your header height
    borderRadius: '0px 0px 24px 24px', // Rounded corners at the bottom
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <Box sx={{ bgcolor: 'background.default', pt: 8 }}>
      <Box style={imageContainerStyle}>
        <img src={landingPageImage} alt="About Us" style={imageStyle} />
      </Box>
      <AboutUs />
      <ImageGallery />
      <AboutImagesection imageUrl={aboutUsImage} />
      <Quote />
    </Box>
  );
};

export default LandingPage;

// *********************************

// import React from 'react';
// import { Box } from '@mui/material';
// import landingPageImage from '../images/Landing-Page.jpg';
// import AboutUs from '../components/AboutUs';
// import ImageGallery from '../components/ImageGallery';
// import AboutImagesection from '../components/AboutImagesection';
// import aboutUsImage from '../images/about-us-image.jpg';

// const glassEffectStyle: React.CSSProperties = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundImage: `url(${landingPageImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   filter: 'blur(10px)', // Adjust the blur radius as needed
//   opacity: 0.8, // Adjust the opacity for desired transparency
// };

// const contentStyle: React.CSSProperties = {
//   position: 'relative',
//   zIndex: 1,
//   background: 'rgba(255, 255, 255, 0.6)', // Semi-transparent background
//   borderRadius: '16px',
//   padding: '40px', // Add padding inside the content box
// };

// const LandingPage: React.FC = () => {
//   return (
//     <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
//       <div style={glassEffectStyle} />
//       <Box sx={{ position: 'relative', zIndex: 1, py: 8 }}>
//         <AboutUs />
//         <ImageGallery />
//         <AboutImagesection imageUrl={aboutUsImage} />
//       </Box>
//     </Box>
//   );
// };

// export default LandingPage;
