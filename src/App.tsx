import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Box from '@mui/material/Box';
import { CartProvider } from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage';
import ContactUsPage from './pages/ContactUsPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          <Router>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Header />
              <Box component="main" sx={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/products" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/contact" element={<ContactUsPage />} />
                  <Route
                    path="/order-confirmation"
                    element={<OrderConfirmationPage />}
                  />
                </Routes>
              </Box>
              <Footer />
            </Box>
            <ToastContainer position="bottom-right" />
          </Router>
        </CartProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
