import React from 'react'; 
import logo from '../images/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import Web3 from 'web3';
import wallet from '../images/wallet.png'

function Header() {
  
  const loadWeb3 = async () => {
    
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      try {
        await window.ethereum.enable()
      } catch (error) {
        console.log(error);
      }      
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
    
  } 

  return (
    <div>          
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#"><img src={logo} width="175" alt="Logo" /></Navbar.Brand>
        <Nav className="navbar mx-auto">
          <Nav.Link className="font-weight-bold mx-5" href="#">Home</Nav.Link>
          <Nav.Link className="font-weight-bold mx-5" href="#">Features</Nav.Link>
          <Nav.Link className="font-weight-bold mx-5" href="#">Pricing</Nav.Link>
        </Nav>
        <Nav.Link onClick={loadWeb3}><img src={wallet} /></Nav.Link>
      </Navbar>      
    </div>
  );
}

export default Header;