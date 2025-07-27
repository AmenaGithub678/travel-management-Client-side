import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // Convert gallery input (comma-separated) into array
    data.gallery = data.gallery.split(',').map(url => url.trim());
    data.tourPlan = data.tourPlan.split(',').map(day => day.trim());

    try {
      await axiosSecure.post('/packages', data);
      Swal.fire({
        icon: 'success',
        title: 'Package Added!',
        text: 'Your tour package was added successfully.',
      });
      reset();
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
        <textarea {...register('tourPlan')} placeholder="Tour Plan Days (comma-separated)" className="textarea textarea-bordered w-full" required />

        <button type="submit" className="btn btn-primary w-full">Add Package</button>
      </form>
    </div>
    );
};

export default AddPackage;