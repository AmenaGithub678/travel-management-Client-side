import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const UserOverview = () => {
  // ✅ Summary Cards
  const stats = [
    { title: "Total Bookings", value: 12, color: "bg-red-500" },
    { title: "Total Payments", value: "$2,350", color: "bg-green-500" },
    { title: "Avg. Value", value: "$195", color: "bg-purple-500" },
  ];

  // ✅ Bookings Data (Bangladesh Tourist Spots)
  const bookings = [
    {
      id: 1,
      title: "Cox’s Bazar Beach Resort",
      type: "Hotel",
      date: "05 Sep 2025",
      time: "02:00 PM",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Sundarbans Jungle Safari",
      type: "Tour",
      date: "12 Sep 2025",
      time: "08:00 AM",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Saint Martin Cruise",
      type: "Tour",
      date: "20 Sep 2025",
      time: "06:30 AM",
      status: "Completed",
    },
    {
      id: 4,
      title: "Bandarban Hills Retreat",
      type: "Hotel",
      date: "27 Sep 2025",
      time: "12:00 PM",
      status: "Upcoming",
    },
    {
      id: 5,
      title: "Sajek Valley Adventure",
      type: "Tour",
      date: "03 Oct 2025",
      time: "09:00 AM",
      status: "Upcoming",
    },
  ];

  // ✅ Notifications Data
  const notifications = [
    {
      id: 1,
      title: "Tour Reminder",
      time: "2 hrs ago",
      message:
        "🌴 Your Sundarbans Jungle Safari is on 12 Sep 2025. Don’t forget to carry your ID & safety gear!",
    },
    {
      id: 2,
      title: "Reschedule Update",
      time: "1 day ago",
      message:
        "🛏️ Your Bandarban Hills Retreat booking has been rescheduled to 29 Sep 2025. Please check your email.",
    },
    {
      id: 3,
      title: "Booking Confirmation",
      time: "2 days ago",
      message:
        "✈️ Thank you for booking Saint Martin Cruise! Your journey starts on 20 Sep 2025 at 06:30 AM.",
    },
    {
      id: 4,
      title: "Special Offer",
      time: "3 days ago",
      message:
        "🎉 Get 15% OFF on Sajek Valley Adventure if booked before 15 Sep 2025!",
    },
    {
      id: 5,
      title: "Travel Alert",
      time: "4 days ago",
      message:
        "⚠️ Due to weather updates, Cox’s Bazar tours may be delayed. Please stay tuned for notifications.",
    },
  ];

  // ✅ Pie Chart Data
  const pieData = [
    { name: "Hotels", value: 9, color: "#3b82f6" },
    { name: "Cars", value: 6, color: "#10b981" },
    { name: "Tours", value: 4, color: "#f59e0b" },
    { name: "Flights", value: 5, color: "#ef4444" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* ✅ Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl">
            <div className="card-body flex-row items-center gap-4">
              <div
                className={`w-12 h-12 flex items-center justify-center text-white rounded-full ${s.color}`}
              >
                📊
              </div>
              <div>
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-gray-500">{s.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Recent Bookings + Booking Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Recent Bookings</h2>
            <ul className="space-y-4 mt-4">
              {bookings.map((b) => (
                <li
                  key={b.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-semibold">
                      {b.title}{" "}
                      <span className="text-sm text-gray-500">({b.type})</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Date: {b.date} | Time: {b.time}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      b.status === "Upcoming"
                        ? "bg-purple-100 text-purple-600"
                        : b.status === "In Progress"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {b.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Statistics */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Booking Statistics</h2>
            <p className="text-xl font-bold mb-2">$2,659</p>
            <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={100} label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-green-600 font-medium mt-2">
              +15% compared to last year
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Notifications */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Notifications</h2>
          <ul className="mt-4 space-y-4">
            {notifications.map((n) => (
              <li key={n.id} className="border-b pb-3">
                <p className="font-semibold flex items-center gap-2">
                  🔔 {n.title}
                  <span className="text-xs text-gray-400">({n.time})</span>
                </p>
                <p className="text-sm text-gray-600">{n.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
