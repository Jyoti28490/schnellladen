import React from 'react';
import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';
import gallery5 from '../images/gallery-5.jpg';
import gallery6 from '../images/gallery-6.jpg';

const images = [
  { id: 1, imageUrl: gallery1, title: 'Image 1' },
  { id: 2, imageUrl: gallery2, title: 'Image 2' },
  { id: 3, imageUrl: gallery3, title: 'Image 3' },
  { id: 4, imageUrl: gallery4, title: 'Image 4' },
  { id: 5, imageUrl: gallery5, title: 'Image 5' },
  { id: 6, imageUrl: gallery6, title: 'Image 6' },
];

const ImageGallery: React.FC = () => {
  return (
    <Box sx={{ p: 6, mb: 8 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 6 }}>
        Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <AnimatedImage imageUrl={image.imageUrl} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

interface AnimatedImageProps {
  imageUrl: string;
  index: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ imageUrl, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px) rotateY(-90deg)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView
        ? 'translateY(0px) rotateY(0deg)'
        : 'translateY(50px) rotateY(-90deg)',
    },
    delay: index * 200, // Delay each image animation
  });

  return (
    <animated.div style={{ ...springProps, perspective: 1000 }} ref={ref}>
      <Card sx={{ maxWidth: 345, margin: 'auto', borderRadius: '10%' }}>
        <CardMedia
          component="img"
          height="250"
          image={imageUrl}
          alt={`Image ${index + 1}`}
        />
      </Card>
    </animated.div>
  );
};

export default ImageGallery;
