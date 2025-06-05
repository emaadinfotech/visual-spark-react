
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
}

const StatsCard = ({ title, value, change, isPositive }: StatsCardProps) => {
  return (
    <Card className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
