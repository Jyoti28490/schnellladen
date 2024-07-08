import React from 'react';
import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TypingEffect from './TypingEffect';
import backgroundImage from '../images/Background.jpg';
import { useTranslation } from 'react-i18next';

const Quote: React.FC = () => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        backdropFilter: 'blur(10px)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Green color for the quote text
        padding: '20px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '600px',
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: '4rem', mb: -1, color: '#4CAF50' }} />
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 'bold', display: 'inline' }}
        >
          <TypingEffect
            sentences={[
              t('quote'), // Fetching the quote translation
            ]}
            typingDelay={100}
            eraseDelay={1000}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Quote;
