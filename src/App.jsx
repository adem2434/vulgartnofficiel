import React from 'react';
    import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
    import { CSSTransition, TransitionGroup } from 'react-transition-group';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import Shop from './pages/Shop';
    import About from './pages/About';
    import Checkout from './pages/Checkout';
    import Cart from './pages/Cart';
    import ProductDetails from './pages/ProductDetails';
    import OrderConfirmation from './pages/OrderConfirmation';
    import Login from './pages/Login';
    import Register from './pages/Register';
    import Wishlist from './pages/Wishlist';
    import './index.css';
    import { CartProvider } from './context/CartContext';
    import { AuthProvider } from './context/AuthContext';

    function App() {
      const location = useLocation();

      React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

      return (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} classNames="page-transition" timeout={300}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/shop/product/:productId" element={<ProductDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </main>
          <Footer />
        </div>
      );
    }

    function AppWrapper() {
      return (
        <Router>
          <AuthProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AuthProvider>
        </Router>
      );
    }

    export default AppWrapper;
