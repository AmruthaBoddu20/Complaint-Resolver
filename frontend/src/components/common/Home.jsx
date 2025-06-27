import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image1 from '../../Images/Image1.jpg';
import Footer from './FooterC';

const Home = () => {
   const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      flexWrap: 'wrap',
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #f6d8f6, #e3b0f7)',
      borderRadius: '16px',
   };

   const leftStyle = {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px',
   };

   const imageStyle = {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '20px',
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
   };

   const rightStyle = {
      flex: 1,
      textAlign: 'center',
      padding: '20px',
      color: '#4a0053',
   };

   const fLetter = {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#800080',
   };

   const sLetter = {
      fontSize: '24px',
      color: '#8e44ad',
   };

   const tLetter = {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#c71585',
   };

   const buttonStyle = {
      backgroundColor: '#b83b5e',
      border: 'none',
      fontWeight: '600',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '8px',
      marginTop: '12px',
   };

   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand>Complaint Resolver </Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'} className="nav-link text-light">Home</Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link to={'/signup'} className="nav-link text-light">SignUp</Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link to={'/login'} className="nav-link text-light">Login</Link>
                  </li>
               </ul>
            </Container>
         </Navbar>

         <Container style={containerStyle}>
            <div style={leftStyle}>
               <img src={Image1} alt="ComplaintCare" style={imageStyle} />
            </div>
            <div style={rightStyle}>
               <p>
                  <span style={fLetter}>Empower Your Team,</span><br />
                  <span style={sLetter}>Exceed Customer Expectations: Discover our</span><br />
                  <span style={tLetter}>Complaint Management Solution</span><br />
                  <Link to={'/Login'}>
                     <Button style={buttonStyle}>Register your Complaint</Button>
                  </Link>
               </p>
            </div>
         </Container>

         <Footer />
      </>
   );
};

export default Home;
