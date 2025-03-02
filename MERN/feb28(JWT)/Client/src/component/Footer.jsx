import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundColor:'#343a40', color:'white',height:'100px'}} className='text-white p-3'>
      <Container>
        <Row>
          <Col md={12} className='text-center'>
            &copy; {new Date().getFullYear()} Copyright: Company Name
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

