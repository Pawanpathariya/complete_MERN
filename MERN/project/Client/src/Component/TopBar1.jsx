
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopBar1 = () => {
  return (
   <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Doctor DashBoard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {localStorage.getItem("doctorName")}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
};

export default TopBar1;

