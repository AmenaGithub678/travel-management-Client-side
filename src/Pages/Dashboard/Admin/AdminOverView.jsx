import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const AdminOverView = () => {
    const stats = {
    totalTourGuides: 12,
    totalPackages: 8,
    totalClients: 50,
    totalStories: 30,
    totalPayment: 12500,
  };

  const chartData = [
    { name: 'Tour Guides', value: stats.totalTourGuides },
    { name: 'Packages', value: stats.totalPackages },
    { name: 'Clients', value: stats.totalClients },
    { name: 'Stories', value: stats.totalStories },
    { name: 'Payments ($)', value: stats.totalPayment },
  ];

    return (
        <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded">Total Tour Guides: {stats.totalTourGuides}</div>
        <div className="bg-white p-4 shadow rounded">Total Packages: {stats.totalPackages}</div>
        <div className="bg-white p-4 shadow rounded">Total Clients: {stats.totalClients}</div>
        <div className="bg-white p-4 shadow rounded">Total Stories: {stats.totalStories}</div>
        <div className="bg-white p-4 shadow rounded">Total Payments: ${stats.totalPayment}</div>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Overview Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
};

export default AdminOverView;