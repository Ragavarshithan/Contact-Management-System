import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Simulating fetching data from the backend
    const response = [
      { timestamp: '2023-06-24 09:00:00', uptime: 99.8, responseTime: 120, requestTime: 150 },
      { timestamp: '2023-06-24 10:00:00', uptime: 99.9, responseTime: 110, requestTime: 160 },
      { timestamp: '2023-06-24 11:00:00', uptime: 99.7, responseTime: 130, requestTime: 140 },
      { timestamp: '2023-06-24 12:00:00', uptime: 99.6, responseTime: 140, requestTime: 170 },
      { timestamp: '2023-06-24 13:00:00', uptime: 99.8, responseTime: 125, requestTime: 155 },
      { timestamp: '2023-06-24 14:00:00', uptime: 99.9, responseTime: 115, requestTime: 165 },
      { timestamp: '2023-06-24 15:00:00', uptime: 99.7, responseTime: 135, requestTime: 145 },
      { timestamp: '2023-06-24 16:00:00', uptime: 99.6, responseTime: 145, requestTime: 175 },
    ];

    setData(response);
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uptime" stroke="#8884d8" name="Uptime" />
        <Line type="monotone" dataKey="responseTime" stroke="#82ca9d" name="Response Time" />
        <Line type="monotone" dataKey="requestTime" stroke="#ff0000" name="Request Time" />
      </LineChart>
    </ResponsiveContainer>
  );
}
