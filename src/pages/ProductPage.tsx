import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { CartContext } from '../contexts/CartContext';

import product1 from '../images/product-1.jpg';
import product2 from '../images/product-2.jpg';
import product3 from '../images/product-3.jpg';
import product4 from '../images/product-4.jpg';
import product5 from '../images/product-5.jpg';
import product6 from '../images/product-6.jpg';

const products = [
  {
    id: 1,
    name: 'Electric Charging 1',
    price: 150,
    imageUrl: product1,
  },
  { id: 2, name: 'Electric Charging 1', price: 120, imageUrl: product2 },
  { id: 3, name: 'Cycle rent', price: 110, imageUrl: product3 },
  {
    id: 4,
    name: 'Cycle rent',
    price: 90,
    imageUrl: product4,
  },
  { id: 5, name: 'Mobility for Elderly', price: 300, imageUrl: product5 },
  { id: 6, name: 'Mobility for Elderly', price: 320, imageUrl: product6 },
];

const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const [_, setAddedProductId] = useState<number | null>(null);

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }) => {
    if (cartContext) {
      cartContext.addToCart(product);
      setAddedProductId(product.id);
      toast.success(`${product.name} ${t('product_added_to_cart')}`);
    }
  };

  return (
    <Box sx={{ px: 6, py: 14 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 6 }}>
        {t('products')}
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('price')}: {product.price} €
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: '#4da551',
                    '&:hover': {
                      bgcolor: '#3b8642',
                    },
                  }}
                  onClick={() => handleAddToCart(product)}
                >
                  {t('add_to_cart')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
