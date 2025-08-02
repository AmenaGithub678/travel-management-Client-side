import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  // ✅ NEW: State for structured tourPlan array
  const [tourPlan, setTourPlan] = useState([
    { day: 1, title: '', details: '' }
  ]);

   // ✅ NEW: Handle tour plan field change
  const handleTourPlanChange = (index, field, value) => {
    const updated = [...tourPlan];
    updated[index][field] = value;
    setTourPlan(updated);
  };

    // ✅ NEW: Add more days to the tour plan
  const addDay = () => {
    setTourPlan([...tourPlan, {
      day: tourPlan.length + 1,
      title: '',
      details: ''
    }]);
  };

  const onSubmit = async (data) => {
    // Convert gallery input (comma-separated) into array
    data.gallery = data.gallery.split(',').map(url => url.trim());
     data.tourPlan = tourPlan;

    try {
      await axiosSecure.post('/packages', data);
      Swal.fire({
        icon: 'success',
        title: 'Package Added!',
        text: 'Your tour package was added successfully.',
      });
      reset();
      setTourPlan([{ day: 1, title: '', details: '' }]);
    } catch (err) {
      Swal.fire('Error', 'Failed to add package.', 'error');
    }
  };
    return (
<div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl my-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Tour Package</h2>

      
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  <input {...register('title')} placeholder="Trip Title" className="input input-bordered w-full" required />
  <input {...register('photo')} placeholder="Thumbnail Photo URL" className="input input-bordered w-full" required />
  <input {...register('tourType')} placeholder="Tour Type (e.g. Adventure)" className="input input-bordered w-full" required />
  <input type="number" {...register('price')} placeholder="Price" className="input input-bordered w-full" required />

  <textarea {...register('description')} placeholder="About the Tour" className="textarea textarea-bordered w-full" required />
  <textarea {...register('gallery')} placeholder="Gallery Image URLs (comma-separated)" className="textarea textarea-bordered w-full" required />

  {/* Tour Plan Section */}
  <div className="space-y-4 border p-4 rounded bg-base-100">
    <h3 className="text-lg font-semibold">Tour Plan</h3>
    {tourPlan.map((plan, index) => (
      <div key={index} className="space-y-2 border p-3 rounded bg-base-200">
        <p className="font-medium">Day {plan.day}</p>
        <input
          type="text"
          placeholder="Title"
          value={plan.title}
          onChange={(e) => handleTourPlanChange(index, 'title', e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Details"
          value={plan.details}
          onChange={(e) => handleTourPlanChange(index, 'details', e.target.value)}
          className="textarea textarea-bordered w-full"
          required
        />
      </div>
    ))}
    <button type="button" onClick={addDay} className="btn btn-outline btn-sm mt-2">
      + Add Day
    </button>
  </div>

  <button type="submit" className="btn btn-primary w-full">Add Package</button>
</form>



    </div>
    );
};

export default AddPackage;