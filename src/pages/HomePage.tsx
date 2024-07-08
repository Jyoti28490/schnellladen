import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        {t('welcome')}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {t('description')}
      </Typography>
    </Container>
  );
};

export default HomePage;
