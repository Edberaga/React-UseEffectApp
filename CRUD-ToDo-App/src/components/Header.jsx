import { Container, Navbar } from 'react-bootstrap';
import logo from '../assets/Site_Logo.png';

const Header = () => {
  return (
  <header>
    <div style={{
      width: "100%",
      backgroundColor: "white",
      textAlign: "center"
    }}>
      <a href='/'><img src={logo} alt="To do list app logo" width="135px"/></a>
    </div>
    <Navbar className='pb-3' bg='white' variant='light'>
      <Container>
        <Navbar.Brand href='/note'>Check Notes</Navbar.Brand>
        <Navbar.Brand href='/note/add-note'>Add Notes</Navbar.Brand>
      </Container>
    </Navbar>
  </header>
  )
}

export default Header