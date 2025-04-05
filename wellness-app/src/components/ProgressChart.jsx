// ProgressChart.js
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Week 1', progress: 10 },
  { name: 'Week 2', progress: 25 },
  { name: 'Week 3', progress: 40 },
  { name: 'Week 4', progress: 60 },
  { name: 'Week 5', progress: 80 },
  { name: 'Week 6', progress: 100 },
];

const ProgressChart = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-white to-blue-100 shadow-2xl rounded-2xl max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">📈 Your Progress Over Time</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
          <XAxis dataKey="name" tick={{ fill: '#1e3a8a', fontWeight: 500 }} />
          <YAxis tick={{ fill: '#1e3a8a', fontWeight: 500 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#f0f9ff', borderRadius: '12px', borderColor: '#3b82f6' }}
            labelStyle={{ color: '#1e3a8a', fontWeight: 'bold' }}
            itemStyle={{ color: '#1e40af' }}
          />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#3b82f6"
            strokeWidth={4}
            dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
