import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import App from './App';
import UserContext from './UserContext';

// Mock Stripe object
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx'); 

it('should render text from the homepage', async () => {
  render(
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <CartProvider
          mode="client-only"
          stripe={stripePromise}
          currency="USD"
          // Stripe success and cancel URLs
          successUrl={window.location.origin}
          cancelUrl={window.location.origin}
        >
          <UserContext.Provider value={{ currentUser: null, setCurrentUser: jest.fn(), logout: jest.fn() }}>
            <App />
          </UserContext.Provider>
        </CartProvider>
      </Elements>
    </BrowserRouter>
  );
  
  const linkElement = await screen.findByText(/Life is full of different moods and modes./i);
  expect(linkElement).toBeInTheDocument();
});


it('should render without crashing', () => {
  render(
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <CartProvider
          mode="client-only"
          stripe={stripePromise}
          currency="USD"
          // Stripe success and cancel URLs
          successUrl={window.location.origin}
          cancelUrl={window.location.origin}
        >
          <UserContext.Provider value={{ currentUser: null, setCurrentUser: jest.fn(), logout: jest.fn() }}>
            <App />
          </UserContext.Provider>
        </CartProvider>
      </Elements>
    </BrowserRouter>
  );
});
