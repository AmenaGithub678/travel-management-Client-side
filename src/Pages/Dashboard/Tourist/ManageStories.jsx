import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router';

const ManageStories = () => {
const axiosSecure = useAxiosSecure();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axiosSecure.get('/stories') // Assuming this gets all stories
      .then(res => {
        setStories(res.data);
      })
      .catch(err => console.error(err));
  }, [axiosSecure]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/stories/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire('Deleted!', 'Your story has been deleted.', 'success');
          setStories(stories.filter(story => story._id !== id));
        }
      } catch (err) {
        console.error(err);
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
    }
  };

    return (
       <div className="min-h-screen p-6 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">Manage Stories</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {stories.map(story => (
          <div key={story._id} className="card bg-white shadow-lg">
            <figure className="h-52 overflow-hidden">
              <img
                src={story.images?.[0]}
                alt={story.title}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{story.title}</h3>
              <p className="text-sm text-gray-700">{story.description.slice(0, 100)}...</p>
              <div className="mt-4 flex justify-between">
                <Link to={`/dashboard/update-story/${story._id}`} className="btn btn-outline btn-sm">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(story._id)}
                  className="btn btn-error btn-sm text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ManageStories;