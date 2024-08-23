import React from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [3000, 2000, 4000, 5000, 6000, 7000, 8000],
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
        text: 'Monthly Sales Data',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales (in USD)',
        },
        beginAtZero: true,
      },
    },


    maintainAspectRatio: false,
    animation: {
      duration: 500, // Animation speed in milliseconds (faster)
    },


    maintainAspectRatio: false, // This allows the chart to resize based on the container
  };

  return (
    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e0e0e0', borderRadius: '8px', height: '450px' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.25rem', color: '#343a40', marginBottom: '20px' }}>Sales Over Time</Card.Title>
        <div style={{ height: '350px' }}>
          <Line data={data} options={options} height={300} /> {/* Adjust height here */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
