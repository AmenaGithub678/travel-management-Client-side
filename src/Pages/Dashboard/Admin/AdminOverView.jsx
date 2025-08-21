import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { FcComboChart } from "react-icons/fc";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { HiOutlineBell } from "react-icons/hi";

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#3B82F6"];

const renderCustomLabel = ({ percent }) => `${(percent * 100).toFixed(0)}%`;

const AdminOverview = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const chartData = [
    { name: "Payments", value: stats.totalPayment / 100 },
    { name: "Tour Guides", value: stats.totalTourGuides },
    { name: "Packages", value: stats.totalPackages },
    { name: "Clients", value: stats.totalClients },
    { name: "Stories", value: stats.totalStories },
  ];

  const totalValue = chartData.reduce((acc, cur) => acc + cur.value, 0);

  // ✅ Fake data for bar chart
  const monthlyData = [
    { month: "Jan", payments: 500 },
    { month: "Feb", payments: 700 },
    { month: "Mar", payments: 1200 },
    { month: "Apr", payments: 900 },
    { month: "May", payments: 1500 },
    { month: "Jun", payments: 1100 },
    { month: "Jul", payments: 1800 },
    { month: "Aug", payments: 1400 },
  ];

   const notifications = [
    { id: 1, title: "Tour Reminder", message: "Your Cox's Bazar Sea Beach tour starts on 12 Sep 2025 at 09:30 AM.", time: "2 hours ago" },
    { id: 2, title: "Booking Rescheduled", message: "Your Sundarbans trip has been rescheduled to 20 Sep 2025.", time: "1 day ago" },
    { id: 3, title: "Booking Confirmation", message: "Your Srimangal Tea Gardens tour has been confirmed for 25 Sep 2025.", time: "2 days ago" },
    { id: 4, title: "Special Offer", message: "Book your next Bandarban trip by Oct 2025 to avail discounts!", time: "3 days ago" },
    { id: 5, title: "New Message", message: "Tourist John Doe left you a message about his upcoming trip.", time: "5 days ago" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-primary">
          <FcComboChart /> Admin Overview
        </h1>

        <div className="flex items-center gap-3">
          <input
            type="date"
            className="border rounded-lg px-3 py-2 text-sm shadow-sm"
          />
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-3 py-2 text-sm shadow-sm"
          />
        </div>
      </div>

      {/* Chart + Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        {/* Pie Chart Card */}
        <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold mb-4 text-secondary">Overview Distribution</h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={70}
                dataKey="value"
                label={renderCustomLabel}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) =>
                  name === "Payments"
                    ? [`$${value.toLocaleString()}`, name]
                    : [value.toLocaleString(), name]
                }
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>

          {/* Centered Total */}
          <div className="absolute top-[55%] text-center">
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-xl font-bold">{totalValue.toLocaleString()}</p>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="grid grid-cols-2 gap-4">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow flex flex-col justify-center min-h-[120px] border-l-4"
              style={{ borderColor: COLORS[index % COLORS.length] }}
            >
              {/* ✅ Title color matches chart slice */}
              <p
                className="text-sm font-medium mb-2"
                style={{ color: COLORS[index % COLORS.length] }}
              >
                {item.name}
              </p>
              <p className="text-2xl font-semibold">
                {item.name === "Payments"
                  ? `$${item.value.toLocaleString()}`
                  : item.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Extra Fake Data Bar Chart */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
        <h2 className="text-lg font-semibold mb-4 text-primary">Monthly Payments Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(val) => `$${val}`} />
            <Bar dataKey="payments" fill="#4F46E5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
{/* Notification */}
<div className="mt-4">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary"><HiOutlineBell className="h-5 w-5 " /> Notifications</h2>
        <div className="space-y-4">
          {notifications.map((note) => (
            <div key={note.id} className="card shadow-sm border-l-16 border-r-16 border-b-10
             border-primary p-12">
              <h3 className="font-semibold text-primary">{note.title}</h3>
              <p className="text-secondary">{note.message}</p>
              <p className="text-sm text-info  mt-1">{note.time}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AdminOverview;
