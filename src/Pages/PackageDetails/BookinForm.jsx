import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router';

const BookinForm = ({ selectedPackage }) => {
   const { register, handleSubmit, setValue, watch } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: guides = [] } = useQuery({
    queryKey: ['tour-guides'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tour-guides');
      return res.data;
    }
  });

  const onSubmit = async (data) => {
    const bookingInfo = {
      packageName: selectedPackage.title,
      packageId: selectedPackage._id,
      price: selectedPackage.price,
      tourDate: data.tourDate,
      guideId: data.guideId,
      guideName: guides.find(g => g._id === data.guideId)?.name || '',
      touristName: user?.displayName,
      touristEmail: user?.email,
      touristPhoto: user?.photoURL,
      status: 'pending',
      createdAt: new Date()
    };

    try {
      const res = await axiosSecure.post('/bookings', bookingInfo);
      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Confirm your Booking',
          text: 'Your booking has been added.',
          confirmButtonText: 'Go to My Bookings',
          showCancelButton: true,
          cancelButtonText: 'Close'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/dashboard/my-bookings';
          }
        });
      }
    } catch (error) {
      console.error('Booking failed:', error);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };
    return (

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-6 rounded-xl shadow bg-white max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Book This Tour</h2>

      <div>
        <label>Package Name</label>
        <input className="input input-bordered w-full" value={selectedPackage.title} readOnly />
      </div>

      <div>
        <label>Tourist Name</label>
        <input className="input input-bordered w-full" value={user?.displayName} readOnly />
      </div>

      <div>
        <label>Tourist Email</label>
        <input className="input input-bordered w-full" value={user?.email} readOnly />
      </div>

      <div>
        <label>Tourist Photo URL</label>
        <input className="input input-bordered w-full" value={user?.photoURL} readOnly />
      </div>

      <div>
        <label>Price</label>
        <input className="input input-bordered w-full" value={selectedPackage.price} readOnly />
      </div>

      <div>
        <label>Tour Date</label>
        <DatePicker
          selected={watch('tourDate')}
          onChange={(date) => setValue('tourDate', date)}
          className="input input-bordered w-full"
          placeholderText="Select a tour date"
          required
        />
      </div>

      <div>
        <label>Select Tour Guide</label>
        <select {...register('guideId', { required: true })} className="select select-bordered w-full">
          <option value="">-- Select Guide --</option>
          {guides.map(guide => (
            <option key={guide._id} value={guide._id}>{guide.name}</option>
          ))}
        </select>
      </div>
<Link to='/dashboard/my-bookings'>
 <button type="submit" className="btn btn-primary w-full">Book Now</button>
</Link>

    </form>
    );
};

export default BookinForm;