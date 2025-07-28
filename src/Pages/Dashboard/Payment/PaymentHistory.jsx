import React from 'react';
import  { axiosSecure } from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
const { user } = useAuth();


  const { data: payments = [], isPending } = useQuery({
    queryKey: ['paymentHistory', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isPending) {
    return <p className="text-center text-lg">Loading payment history...</p>;
  }

    return (
        <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Payment History</h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th>#</th>
            <th>Booking ID</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Transaction ID</th>
            <th>Paid Time</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <td>{index + 1}</td>
              <td>{payment.bookingId}</td>
              <td>${(payment.amount / 100).toFixed(2)}</td>
              <td>{payment.paymentMethod?.[0]}</td>
              <td className="text-sm">{payment.transactionId}
              </td>
             <td>{new Date(payment.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default PaymentHistory;