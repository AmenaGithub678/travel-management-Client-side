import React, {  useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
// import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import  { axiosSecure } from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import useAuth from '../../../hooks/useAuth';

const PaymentForm = ({bookingId}) => {
const stripe = useStripe();
const {user} = useAuth();
const elements = useElements();
const [error, setError] = useState('');
const navigate =useNavigate();


const { data: booking = {}, isPending } = useQuery({
     queryKey: ['bookingPayment', bookingId],
     queryFn: async () => {
         const res = await axiosSecure.get(`/bookings/${bookingId}`);
        //   const res = await axios.get(`https://touriest-management-system.vercel.app/bookings/${bookingId}`);
         return res.data;

     },
     enabled: !!bookingId,
 });
// console.log(bookingId);
// console.log(booking);
     if (isPending) {
       return <p className="text-center text-lg font-semibold">...loading payment info</p>;
   }
 const handleSubmit = async (e) => {
    e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }
const amount = parseFloat(booking.price ) * 100;
// step- 1: validate the card
const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
           setError(error.message);
        }
        else {
             setError('');
            // console.log('payment method', paymentMethod);

//  step-2: create payment intent
const res = await axiosSecure.post('/create-payment-intent', 
    { 
     amount,
}); 
const clientSecret = res.data.clientSecret;


// step-3: confirm payment
const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                name: user?.displayName,
                email: user?.email
                   },
               },
           });
            if (result.error) {
                setError(result.error.message);
            } else {
                setError('');
                if (result.paymentIntent.status === 'succeeded') {
                    // console.log('Payment succeeded!');
                    const transactionId = result.paymentIntent.id;
// step-4 mark parcel paid also create payment history
    const paymentData = {
               bookingId,
               email: user?.email,
               amount,
               transactionId: transactionId,
               paymentMethod: result.paymentIntent.payment_method_types
                    }

const paymentRes = await axiosSecure.post('/payments', paymentData);

if (paymentRes.data.insertedId) {
  // Step 5: Update booking status to 'in review'
  const updateStatus = await axiosSecure.patch(`/bookings/payment/${bookingId}`, {
    transactionId: transactionId,
  });

  if (updateStatus.data.modifiedCount > 0) {
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful!',
      html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
      confirmButtonText: 'Go to My Booking Pages',
    });

    navigate('/dashboard/my-bookings');
  } else {
    // console.warn("Payment saved, but booking status was not updated.");
  }
}



                }
            };
}
 }
    

    return (
    <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
                <CardElement className="p-2 border rounded">
                </CardElement>
                <button
                    type='submit'
                    className="btn btn-primary text-black w-full"
                    disabled={!stripe}
                >
                    Pay ${booking.price}
                </button>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
            </form>
        </div>
    );
};

export default PaymentForm;