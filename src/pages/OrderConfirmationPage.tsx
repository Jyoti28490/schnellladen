import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import animationData from '../animations/Success-animation.json'; // Path to your Lottie animation file

const OrderConfirmationPage: React.FC = () => {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        bgcolor: 'white',
        p: 3,
      }}
    >
      <Lottie options={defaultOptions} height={300} width={300} />
      <Typography variant="h4" gutterBottom>
        {t('order_successfully_placed')}
      </Typography>
      <Typography variant="body1">
        {t('thank_you_for_your_purchase')}
      </Typography>
    </Box>
  );
};

export default OrderConfirmationPage;
