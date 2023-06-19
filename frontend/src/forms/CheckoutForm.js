import { useContext } from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { Card, CardBody } from 'reactstrap';
import { useShoppingCart } from "use-shopping-cart";
import { useHistory } from 'react-router-dom';
import ModeApi from '../api';
import UserContext from '../UserContext';

function CheckoutForm({ amount, currency }) {
  const { handleSubmit } = useForm();
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart, cartDetails } = useShoppingCart();
  const history = useHistory(); 
  const { currentUser } = useContext(UserContext);
  
  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      
      const apiUrl =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3001/payments' // Development URL
          : 'https://mode-ecommerce.onrender.com/payments'; // Production URL
    
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_method: paymentMethod.id,
          amount: amount,
          currency: currency,
        }),
      });
        
      const data = await response.json();
  
      if (data.success) {
        console.log('Payment succeeded');

        // Here we add the transaction to the database after a successful payment
        try {
          // Loop over each item in the cart and add each as a separate transaction
          for (const [productId, productDetails] of Object.entries(cartDetails)) {
            const transactionData = {
              productId: productId,
              quantity: productDetails.quantity,
              totalPrice: productDetails.price * productDetails.quantity, // assuming price is for one item
            };

            await ModeApi.addTransaction(currentUser.username, transactionData);
          }
        } catch (error) {
          console.error("Failed to add transaction: ", error);
        }

        clearCart();
        history.push('/success');
      } else {
        console.error('Payment failed');
      }
    }
  };
  
  return (
    <div className="container mx-auto py-12 px-4 sm:px-20 mt-5">
      <hr />
      <Card className="shadow-lg rounded-lg sm:w-full">
        <CardBody className="p-4">
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>
          <form className="CheckoutForm-form space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="card" className="block text-sm font-medium text-gray-700">
              Enter Payment Details
            </label>
            <div className="CheckoutForm-Input block w-full p-2 border border-gray-300 rounded-md">
              <CardElement />
            </div>
            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Pay
            </button>
          </form>
        </CardBody>
      </Card>
    </div>
  ); 
}
  
export default CheckoutForm;

  
