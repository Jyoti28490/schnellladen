// src/components/CartItem.tsx
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Cart from '../contexts/CartContext';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { dispatch } = Cart.useCart();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', id: item.id });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      mb={2}
      p={2}
      border={1}
      borderRadius={8}
    >
      <Box
        width="80px"
        height="80px"
        overflow="hidden"
        borderRadius="8px"
        mr={2}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">Price: ${item.price.toFixed(2)}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
      </Box>
      <Box>
        <IconButton onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
