import React from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ dashboardData }) => {
  const data = {
    labels: dashboardData.map((_, index) => `Data ${index + 1}`),
    datasets: [
      {
        label: 'Dashboard Data',
        data: dashboardData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dashboard Data Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Data Points',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 500, // Animation speed in milliseconds (faster)
    },
  };

  return (
    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e0e0e0', borderRadius: '8px', height: '450px' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.25rem', color: '#343a40', marginBottom: '20px' }}>Data Over Time</Card.Title>
        <div style={{ height: '350px' }}>
          <Line data={data} options={options} height={300} /> {/* Adjust height here */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
