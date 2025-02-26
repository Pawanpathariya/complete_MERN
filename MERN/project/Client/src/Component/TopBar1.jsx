
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const TopBar1 = () => {
const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    if (!localStorage.getItem("doctorName")) {
      navigate('/');
    }
  })
  return (
   <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Doctor DashBoard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {localStorage.getItem("doctorName")}
            <button className='btn btn-primary' onClick={Logout} style={{marginLeft:'10px'}}>Logout</button> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
};

export default TopBar1;

