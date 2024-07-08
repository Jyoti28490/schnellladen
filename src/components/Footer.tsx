import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#4da551',
        color: 'white',
        py: 8,
        width: '100%',
        mt: 'auto', // This pushes the footer to the bottom when the content is short
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">{t('about_us_description')}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('quick_links')}
            </Typography>
            <Link
              href="/"
              color="inherit"
              variant="body2"
              display="block"
              sx={{
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {t('home')}
            </Link>
            <Link
              href="/products"
              color="inherit"
              variant="body2"
              display="block"
              sx={{
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {t('products')}
            </Link>
            <Link
              href="/contact"
              color="inherit"
              variant="body2"
              display="block"
              sx={{
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {t('contact_us')}
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t('contact')}
            </Typography>
            <Typography variant="body2">
              Email: support@schnellladen.de
              <br />
              Phone: +49 123 456 789
              <br />
              Address: Hauptstraße 1, 10115 Berlin, Germany
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            {'© '}
            {new Date().getFullYear()} Schnellladen. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
