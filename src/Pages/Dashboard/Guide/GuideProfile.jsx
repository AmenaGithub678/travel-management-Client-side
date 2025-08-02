// import React, { useState } from 'react';
// import useAuth from '../../../hooks/useAuth';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { axiosSecure } from '../../../hooks/useAxiosSecure';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';

// const GuideProfile = () => {
//   const { user } = useAuth(); 
 
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const queryClient = useQueryClient();
//   const { register, handleSubmit, reset } = useForm();

//   // Fetch user profile data by email
//   const { data: profileData = {}, isLoading } = useQuery({
//     queryKey: ['guide-profile', user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/user/role?email=${user?.email}`);
//       return res.data;
//     },
//     enabled: !!user?.email,
//   });

//   // Update user profile
//   const { mutateAsync: updateUser } = useMutation({
//     mutationFn: async (data) => {
//       const res = await axiosSecure.patch(`/tourist-users/${user?.email}`, data);
//       return res.data;
//     },
//     onSuccess: () => {
//       Swal.fire('Success!', 'Profile updated successfully!', 'success');
//       queryClient.invalidateQueries(['guide-profile', user?.email]);
//       setIsModalOpen(false);
//     },
//   });

//   const onSubmit = (data) => {
//     updateUser({
//       name: data.name,
//       photo: data.photo,
//     });
//   };

//   if (isLoading) return <p>Loading profile...</p>;
//     return (
//     <div className="p-4 max-w-xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Welcome, {profileData.name} 👋</h2>
//       <div className="border rounded-xl p-4 shadow bg-white">
//         <img
//           src={profileData.photo}
//           alt="User"
//           className="w-24 h-24 rounded-full object-cover mb-3"
//         />
//         <p><strong>Name:</strong> {profileData.name}</p>
//         <p><strong>Email:</strong> {profileData.email}</p>
//         <p><strong>Role:</strong> {profileData.role}</p>
//         <button
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => {
//             reset({
//               name: profileData.name,
//               photo: profileData.photo
//             });
//             setIsModalOpen(true);
//           }}
//         >
//           Edit Profile
//         </button>
//       </div>

//       {/* Edit Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//               <div>
//                 <label className="block text-sm font-medium">Name</label>
//                 <input
//                   {...register('name')}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Photo URL</label>
//                 <input
//                   {...register('photo')}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>
//               <div className="flex justify-end gap-2 mt-4">
//                 <button
//                   type="button"
//                   className="bg-gray-400 text-white px-4 py-2 rounded"
//                   onClick={() => setIsModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-500 text-white px-4 py-2 rounded"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//     );
// };

// export default GuideProfile;