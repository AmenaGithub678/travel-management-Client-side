import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const JoinGuide = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
 const { register, handleSubmit, reset } = useForm();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    if (!user) return;

    const application = {
      ...data,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };

    setSubmitting(true);
    try {
      const res = await axiosSecure.post('/apply-guide', application); 
      if (res.data?.insertedId || res.data?.acknowledged) {
        setModalOpen(true);
        reset();
      }
    } catch (err) {
      // console.error("Application failed:", err);
    } finally {
      setSubmitting(false);
    }
  };
    return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center">Join as a Tour Guide</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Application Title</span>
            </label>
            <input
              type="text"
              {...register('title', { required: true })}
              className="input input-bordered w-full"
              placeholder="e.g. Expert in Mountain Trekking"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Why do you want to be a tour guide?</span>
            </label>
            <textarea
              {...register('reason', { required: true })}
              className="textarea textarea-bordered w-full"
              rows={4}
              placeholder="Write a brief explanation"
            ></textarea>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">CV Link (Google Drive, PDF, etc)</span>
            </label>
            <input
              type="url"
              {...register('cvLink', { required: true })}
              className="input input-bordered w-full"
              placeholder="https://drive.google.com/..."
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Application Successful</h3>
            <p className="mb-4">Thank you for applying. We will get back to you soon.</p>
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-success"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    );
};

export default JoinGuide;