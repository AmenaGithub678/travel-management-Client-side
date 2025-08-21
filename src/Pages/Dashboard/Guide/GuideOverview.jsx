import React from 'react';
import { HiOutlineBell, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineCheckCircle, HiOutlineStar } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa";
const GuideOverview = () => {
  const bookings = [
    { id: 1, title: "Cox's Bazar Sea Beach", type: "Tour", date: "12 Sep 2025", time: "09:30 AM", status: "Upcoming" },
    { id: 2, title: "Sundarbans Mangrove Forest", type: "Tour", date: "18 Sep 2025", time: "07:00 AM", status: "In Progress" },
    { id: 3, title: "Srimangal Tea Gardens", type: "Tour", date: "25 Sep 2025", time: "10:00 AM", status: "Completed" },
    { id: 4, title: "Bandarban Hills", type: "Tour", date: "02 Oct 2025", time: "08:00 AM", status: "Upcoming" },
    { id: 5, title: "Rangamati Lake", type: "Tour", date: "10 Oct 2025", time: "11:00 AM", status: "Upcoming" },
  ];

  const notifications = [
    { id: 1, title: "Tour Reminder", message: "Your Cox's Bazar Sea Beach tour starts on 12 Sep 2025 at 09:30 AM.", time: "2 hours ago" },
    { id: 2, title: "Booking Rescheduled", message: "Your Sundarbans trip has been rescheduled to 20 Sep 2025.", time: "1 day ago" },
    { id: 3, title: "Booking Confirmation", message: "Your Srimangal Tea Gardens tour has been confirmed for 25 Sep 2025.", time: "2 days ago" },
    { id: 4, title: "Special Offer", message: "Book your next Bandarban trip by Oct 2025 to avail discounts!", time: "3 days ago" },
    { id: 5, title: "New Message", message: "Tourist John Doe left you a message about his upcoming trip.", time: "5 days ago" },
  ];

  const reviews = [
    { id: 1, name: "Alice Rahman", tour: "Cox's Bazar", rating: 5, review: "Amazing guide! Very friendly and knowledgeable." },
    { id: 2, name: "David Karim", tour: "Sundarbans", rating: 4, review: "Great experience, but the schedule was a bit tight." },
    { id: 3, name: "Sophia Islam", tour: "Bandarban", rating: 5, review: "The guide made the trip unforgettable. Highly recommended!" },
  ];

    return (
    <div className="p-6 space-y-6">

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card bg-blue-100 shadow-md flex flex-col items-center p-6">
          <HiOutlineLocationMarker className="h-10 w-10 text-blue-600 mb-2" />
          <h2 className="text-xl font-semibold">25</h2>
          <p className="text-gray-600">Total Tours</p>
        </div>

        <div className="card bg-green-100 shadow-md flex flex-col items-center p-6">
          <HiOutlineCheckCircle className="h-10 w-10 text-green-600 mb-2" />
          <h2 className="text-xl font-semibold">18</h2>
          <p className="text-gray-600">Completed Tours</p>
        </div>

        <div className="card bg-yellow-100 shadow-md flex flex-col items-center p-6">
          <HiOutlineCalendar className="h-10 w-10 text-yellow-600 mb-2" />
          <h2 className="text-xl font-semibold">7</h2>
          <p className="text-gray-600">Upcoming Tours</p>
        </div>

        <div className="card bg-purple-100 shadow-md flex flex-col items-center p-6">
          <FaDollarSign className="h-10 w-10 text-purple-600 mb-2" />
          <h2 className="text-xl font-semibold">$4,560</h2>
          <p className="text-gray-600">Total Earnings</p>
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {bookings.map((booking) => (
            <div key={booking.id} className="card shadow-sm hover:shadow-md transition p-4">
              <h3 className="font-semibold text-lg">{booking.title}</h3>
              <p className="text-gray-600">{booking.type}</p>
              <p className="text-sm text-gray-500">{booking.date} at {booking.time}</p>
              <span className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
                booking.status === "Upcoming" ? "bg-blue-100 text-blue-700" :
                booking.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
                "bg-green-100 text-green-700"
              }`}>
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><HiOutlineBell className="h-5 w-5" /> Notifications</h2>
        <div className="space-y-4">
          {notifications.map((note) => (
            <div key={note.id} className="card shadow-sm border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold">{note.title}</h3>
              <p className="text-gray-600">{note.message}</p>
              <p className="text-sm text-gray-400 mt-1">{note.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reviews */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="card shadow-sm hover:shadow-md transition p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <HiOutlineStar key={i} className="h-4 w-4" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.tour} Tour</p>
              <p className="text-sm text-gray-500 mt-2">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
    );
};

export default GuideOverview;