import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from './charts/Piechart';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';

const Page1 = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedData = JSON.parse(localStorage.getItem('tableData')) || [];
      setDashboardData(storedData);
    };

    // Fetch initial data
    handleStorageChange();

    // Add event listener to update data when localStorage changes
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}><BarChart dashboardData={dashboardData} /></Col>
          <Col xs={4}><LineChart dashboardData={dashboardData} /></Col>
          <Col xs={4}><PieChart dashboardData={dashboardData} /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page1;
