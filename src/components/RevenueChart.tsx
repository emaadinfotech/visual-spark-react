
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const dailyData = [
  { name: 'Sun', value: 140000 },
  { name: 'Mon', value: 200000 },
  { name: 'Tues', value: 115000 },
  { name: 'Wed', value: 175000 },
  { name: 'Thurs', value: 95000 },
  { name: 'Fri', value: 105000 },
  { name: 'Sat', value: 150000 },
];

const weeklyData = [
  { name: 'Week 1', value: 420000 },
  { name: 'Week 2', value: 380000 },
  { name: 'Week 3', value: 450000 },
  { name: 'Week 4', value: 520000 },
];

const monthlyData = [
  { name: 'Jan', value: 1800000 },
  { name: 'Feb', value: 1650000 },
  { name: 'Mar', value: 1920000 },
  { name: 'Apr', value: 2100000 },
  { name: 'May', value: 1980000 },
  { name: 'Jun', value: 2250000 },
];

const RevenueChart = () => {
  const [activeTab, setActiveTab] = useState('Daily');
  
  const getData = () => {
    switch (activeTab) {
      case 'Weekly':
        return weeklyData;
      case 'Monthly':
        return monthlyData;
      default:
        return dailyData;
    }
  };

  const formatYAxis = (value: number) => {
    return `${value / 1000}K`;
  };

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-gray-900">Revenue Overview</CardTitle>
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {['Daily', 'Weekly', 'Monthly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                tickFormatter={formatYAxis}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <Bar 
                dataKey="value" 
                fill="#D4A574" 
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
