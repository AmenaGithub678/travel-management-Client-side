import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router';

const AddStories = () => {
 const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Convert comma-separated URLs into an array
    const imageUrls = data.imageLinks.split(',').map(link => link.trim());

    const storyData = {
      title: data.title,
      description: data.description,
      images: imageUrls,
    };

    try {
      const res = await axiosSecure.post('/stories', storyData);
      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Story Added!',
          text: 'Your story has been successfully submitted.',
        });
        reset();
        navigate('/dashboard/manage-stories');
      }
    } catch (err) {
      // console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed!',
        text: 'Could not submit your story.',
      });
    }
}


    return (
   <div className="min-h-screen bg-base-200 p-6 md:p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Your Story</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="label">Title</label>
            <input
              type="text"
              {...register('title', { required: true })}
              placeholder="Enter story title"
              className="input input-bordered w-full"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">Title is required.</p>}
          </div>

          {/* Description */}
          <div>
            <label className="label">Description</label>
            <textarea
              {...register('description', { required: true })}
              rows="5"
              placeholder="Write your story here..."
              className="textarea textarea-bordered w-full"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">Description is required.</p>}
          </div>

          {/* Image URL Links */}
          <div>
            <label className="label">Image Links (comma separated)</label>
            <input
              type="text"
              {...register('imageLinks', { required: true })}
              placeholder="https://img1.jpg, https://img2.jpg"
              className="input input-bordered w-full"
            />
            {errors.imageLinks && <p className="text-red-500 text-sm mt-1">Please provide image links.</p>}
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full">
            Submit Story
          </button>
        </form>
      </div>
    </div>
    );
};

export default AddStories;