import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Box, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        backgroundColor: 'rgba(77, 165, 81, 0.85)',
        backdropFilter: 'blur(10px)', // Blur effect for glassmorphism
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 123, 255, 0.18)',
        paddingTop: '8px',
        paddingBottom: '8px',
        transition: 'background-color 0.3s ease-out',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Schnellladen
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="inherit"
            component={Link}
            to="/products"
            sx={{ mr: 2 }}
          >
            {t('products')}
          </Button>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cartContext?.cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
