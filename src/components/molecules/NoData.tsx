import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const NoData = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
         <Card body className='w-50 border-2 bg-danger bg-gradient color-1 text-white'>No data available</Card>
    </Container>
   
  )
}

export default NoData