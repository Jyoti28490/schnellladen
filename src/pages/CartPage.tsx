import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [productListHeight, setProductListHeight] = useState(0);
  const productListRef = useRef<HTMLDivElement>(null);

  const handleRemoveFromCart = (productId: number) => {
    if (cartContext) {
      const updatedCart = cartContext.cart.filter(
        (product) => product.id !== productId
      );
      cartContext.setCart(updatedCart);
    }
  };

  const getTotalProducts = () => {
    return cartContext ? cartContext.cart.length : 0;
  };

  const getTotalPrice = () => {
    if (cartContext) {
      return cartContext.cart.reduce(
        (total, product) => total + product.price,
        0
      );
    }
    return 0;
  };

  const handlePlaceOrder = () => {
    if (cartContext) {
      cartContext.setCart([]);
      navigate('/order-confirmation');
    }
  };

  useEffect(() => {
    if (productListRef.current) {
      setProductListHeight(productListRef.current.clientHeight);
    }
  }, [cartContext]);

  return (
    <Box sx={{ p: 6 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartContext && cartContext.cart.length > 0 ? (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box id="product-list" ref={productListRef}>
              {cartContext.cart.map((product, index) => (
                <Card
                  key={index}
                  sx={{ display: 'flex', borderRadius: '8px', mb: 2 }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={product.imageUrl}
                    alt={product.name}
                  />
                  <Box
                    sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}
                  >
                    <CardContent>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2">
                        {t('price')}: {product.price} €
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          mt: 2,
                          bgcolor: '#4da551',
                          '&:hover': {
                            bgcolor: '#3b8642',
                          },
                        }}
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        {t('remove')}
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: 2,
                minHeight: productListHeight,
                background: 'linear-gradient(135deg, #4da551, #3b8642)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  padding: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}
                >
                  {t('total_products')}: {getTotalProducts()}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: 'white' }}
                >
                  {t('total_price')}: {getTotalPrice()} €
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: '#ffffff',
                    color: '#4da551',
                    '&:hover': {
                      bgcolor: '#efffff',
                    },
                  }}
                  onClick={handlePlaceOrder}
                >
                  {t('place_order')}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body2">Your cart is empty.</Typography>
      )}
    </Box>
  );
};

export default CartPage;
