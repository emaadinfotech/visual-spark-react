
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

interface BookingCardProps {
  id: string;
  customerName: string;
  category: string;
  time: string;
  date: string;
  status: 'Pending' | 'Accepted' | 'Declined';
}

const BookingCard = ({ id, customerName, category, time, date, status }: BookingCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Accepted':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Declined':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <span className="text-sm font-medium text-gray-500">#{id}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        <div className="space-y-2">
          <p className="font-medium text-gray-900">Customer Name: {customerName}</p>
          <p className="text-sm text-gray-600">Category: {category}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {time}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
