
import React from 'react';
import StatsCard from './StatsCard';
import BookingCard from './BookingCard';
import RevenueChart from './RevenueChart';
import { ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const statsData = [
    {
      title: 'Total Number Of Booked Services:',
      value: '520',
      change: '28.4%↗',
      isPositive: true,
    },
    {
      title: 'Total Number Of Services Offered:',
      value: '52',
      change: '28.4%↗',
      isPositive: true,
    },
    {
      title: 'Booking Rate:',
      value: '10%',
      change: '12.6%↘',
      isPositive: false,
    },
  ];

  const bookingsData = [
    {
      id: '589654',
      customerName: 'Sam Tek',
      category: 'Hair Care',
      time: '4:00-6:00 PM',
      date: '02/12/2024',
      status: 'Pending' as const,
    },
    {
      id: '589654',
      customerName: 'Sam Tek',
      category: 'Hair Care',
      time: '4:00-6:00 PM',
      date: '02/12/2024',
      status: 'Accepted' as const,
    },
    {
      id: '589654',
      customerName: 'Sam Tek',
      category: 'Hair Care',
      time: '4:00-6:00 PM',
      date: '02/12/2024',
      status: 'Declined' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              isPositive={stat.isPositive}
            />
          ))}
        </div>

        {/* Today's Bookings */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Today's Bookings</h2>
            <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingsData.map((booking, index) => (
              <BookingCard
                key={index}
                id={booking.id}
                customerName={booking.customerName}
                category={booking.category}
                time={booking.time}
                date={booking.date}
                status={booking.status}
              />
            ))}
          </div>
        </div>

        {/* Revenue Chart */}
        <RevenueChart />
      </div>
    </div>
  );
};

export default Dashboard;
