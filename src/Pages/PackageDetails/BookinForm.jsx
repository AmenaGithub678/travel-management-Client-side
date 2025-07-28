import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const BookinForm = ({ selectedPackage }) => {
   const { register, handleSubmit, setValue, watch } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [showCongrats, setShowCongrats] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  // Fetch tour guides
  const { data: guides = [] } = useQuery({
    queryKey: ['tour-guides'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tour-guides');
      return res.data;
    }
  });

  // Fetch user's existing bookings
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ['user-bookings', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    }
  });
  useEffect(() => {
    setBookingCount(bookings?.length || 0);
  }, [bookings]);

  const onSubmit = async (data) => {
  const guide = guides.find(g => g._id === data.guideId);

  const bookingInfo = {
    packageName: selectedPackage.title,
    packageId: selectedPackage._id,
    price: selectedPackage.price,
    tourDate: data.tourDate,
    guideId: guide?._id,
    guideName: guide?.name || '',
    guideEmail: guide?.email || '',
    touristName: user?.displayName,
    touristEmail: user?.email,
    touristPhoto: user?.photoURL,
    status: 'pending',
    createdAt: new Date()
  };

  try {
    const res = await axiosSecure.post('/bookings', bookingInfo);
    if (res.data.insertedId) {
      // success alert
    }
  } catch (error) {
    // error handling
  }
};

    return (

    <div className="relative">
      {showCongrats && (
        <>
          <Confetti />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-success animate-bounce text-center">
              <h2 className="text-3xl font-bold text-green-600 mb-2">🎉 Congratulations! 🎉</h2>
              <p className="text-lg text-gray-700">
                You've booked more than 3 tours! Thanks for being an awesome traveler!
              </p>
            </div>
          </div>
        </>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border p-6 rounded-xl shadow bg-white max-w-xl mx-auto"
      >
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
            {guides.map((guide) => (
              <option key={guide._id} value={guide._id}>
                {guide.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-full">Book Now</button>
      </form>
    </div>
    );
};

export default BookinForm;