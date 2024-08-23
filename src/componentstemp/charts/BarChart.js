import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [3000, 2000, 4000, 5000, 6000, 7000, 8000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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


    maintainAspectRatio: false,
    animation: {
      duration: 300, // Animation speed in milliseconds (faster)
    },



    maintainAspectRatio: false, // This allows the chart to resize based on the container
  };

  return (
    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e0e0e0', borderRadius: '8px', height: '450px' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.25rem', color: '#343a40', marginBottom: '20px' }}>Sales Over Time</Card.Title>
        <div style={{ height: '350px' }}>
          <Bar data={data} options={options} height={300} /> {/* Adjust height here */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
