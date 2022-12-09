import React from 'react';
import './_navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Categories from '../../data/categories';

function MyNavbar({setSelectedCategoryId, setShowGallery, setShowAboutMe, setShowContactMe}) {
  
  const onGalleryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setShowAboutMe(false);
    setShowContactMe(false);
    setShowGallery(true);
  };
  
  const onAboutClick = () => {
    setShowAboutMe(true);
    setShowContactMe(false);
    setShowGallery(false);
  };
  
  const onContactClick = () => {
    setShowAboutMe(false);
    setShowContactMe(true);
    setShowGallery(false);
  };
  
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-contents" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className='main-link' onClick={() => onGalleryClick(0)}>
              Home
            </Nav.Link>
            <NavDropdown className='main-link' title="Explore" id="basic-nav-dropdown">
                {Categories.map(category => {
                    return (
                        <NavDropdown.Item key={category.id} 
                                          className='child-link' 
                                          onClick={() => onGalleryClick(category.id)}>
                            {category.name}
                        </NavDropdown.Item>
                    )
                })}
            </NavDropdown>
            <Nav.Link className='main-link' onClick={() => onAboutClick()}>About</Nav.Link>
            <Nav.Link className='main-link' onClick={() => onContactClick()}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;