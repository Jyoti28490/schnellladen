import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/140"
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{t('add_to_cart')}</Button>
        <Button size="small">{t('learn_more')}</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
