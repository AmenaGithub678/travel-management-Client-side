import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { useParams } from 'react-router';

 const stripePromise = loadStripe(import.meta.env.VITE_payment_Key)

const Payment = () => {
    const { bookingId } = useParams();
    console.log(bookingId);
    return (
         <Elements stripe={stripePromise}>
           <PaymentForm bookingId={ bookingId }></PaymentForm>
        </Elements>


    );
};

export default Payment;