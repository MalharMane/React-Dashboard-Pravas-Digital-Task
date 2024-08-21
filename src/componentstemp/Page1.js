import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from './charts/Piechart';
import BarChart from './charts/BarChart';


const Page1 = () => {
  return (
    <div >
    
      <Container>
   
      
      <Row>
        <Col xs={4}><BarChart /></Col>
        <Col xs={4}><BarChart /></Col>
        <Col xs={4}><PieChart /></Col>
      </Row>
       

    </Container>
    </div>
  );
};

export default Page1;

