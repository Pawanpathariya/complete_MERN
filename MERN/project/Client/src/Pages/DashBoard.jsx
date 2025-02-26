import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Topbar1 from '../Component/TopBar1';
import Sidebar from '../Component/Sidebar';
import { Outlet } from 'react-router-dom';
const DashBoard = () => {
    return (
        <Container fluid style={{ backgroundColor: '#f5f5f5' }}>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <Topbar1 />
                    <div style={{ padding: '20px',width:"80%" ,textAlign:"center"}}>
                      <Outlet/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashBoard;
