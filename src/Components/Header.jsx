import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Header.css'

function Header() {

  const openDoc = () => {
    const documentUrl = '/Resume.pdf'; 
    window.open(documentUrl, '_blank');
  };
  
  return (
    <>
    <div className='overlay' id='home'>
      <Nav className="nav justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href='#about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href='#projects'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href='#contact'>Contacts</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

    <div className='heading'>
      <h1 style={{fontSize:60}}>JASON <br /> <span style={{fontSize:70}}><b>MARTIN</b></span></h1>
      <p className='para'>Graphic Designer</p>
    </div>

    <a><button style={{marginLeft:65,borderRadius:40,padding:9}} onClick={openDoc}>HIRE ME</button></a>
    </>
  )
}
export default Header
