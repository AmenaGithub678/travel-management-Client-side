import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';



// imgBB upload function
const UpdateStory = () => {
   const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [story, setStory] = useState(null);
  const [removedImages, setRemovedImages] = useState([]);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    axiosSecure.get(`/stories/${id}`)
      .then(res => {
        setStory(res.data);
        // Set default image links as comma-separated string
        setValue('imageLinks', res.data.images.join(', '));
        setValue('title', res.data.title);
        setValue('description', res.data.description);
      })
      .catch(err => console.error(err));
  }, [id, axiosSecure, setValue]);

  const handleImageRemove = (url) => {
    setRemovedImages(prev => [...prev, url]);
    setStory(prev => ({
      ...prev,
      images: prev.images.filter(img => img !== url)
    }));
    // Update form value as well
    const updatedLinks = story.images.filter(img => img !== url).join(', ');
    setValue('imageLinks', updatedLinks);
  };

  const onSubmit = async (data) => {
    const allUrls = data.imageLinks.split(',').map(link => link.trim()).filter(Boolean);
    const currentUrls = story.images;
    const newUrls = allUrls.filter(url => !currentUrls.includes(url));
    
    const updatePayload = {
      title: data.title,
      description: data.description,
      removeImages: removedImages,
      addImages: newUrls,
    };

    try {
      const res = await axiosSecure.put(`/stories/${id}`, updatePayload);
      if (res.data.modifiedCount > 0) {
        Swal.fire('Updated!', 'Story updated successfully', 'success');
        navigate('/dashboard/manage-stories');
      } else {
        Swal.fire('Info', 'No changes were made.', 'info');
      }
    } catch (err) {
      // console.error(err);
      Swal.fire('Error!', 'Failed to update story', 'error');
    }
  };

  if (!story) return <p className="text-center py-10">Loading...</p>;

  return (
   <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Story</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Title */}
        <input
          type="text"
          {...register('title', { required: true })}
          className="input input-bordered w-full"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">Title is required.</p>}

        {/* Description */}
        <textarea
          {...register('description', { required: true })}
          className="textarea textarea-bordered w-full"
          rows={5}
        ></textarea>
        {errors.description && <p className="text-red-500 text-sm mt-1">Description is required.</p>}

        {/* Existing Images with Remove Button */}
        <div>
          <p className="font-semibold mb-1">Current Images:</p>
          <div className="flex gap-3 flex-wrap">
            {story.images.map((img, idx) => (
              <div key={idx} className="relative">
                <img src={img} alt={`Story image ${idx + 1}`} className="w-28 h-20 object-cover rounded" />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs"
                  onClick={() => handleImageRemove(img)}
                  title="Remove this image"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Image URL input (comma-separated) */}
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

        <button type="submit" className="btn btn-success">
          Update Story
        </button>
      </form>
    </div>
  );
};

export default UpdateStory;
