import Styles from './_navbar.module.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Categories from '../../data/categories';
import Link from 'next/link';
import logo from '../../public/imgs/logo.png';
import watercolorVine from '../../public/imgs/watercolor-plant.png';
import Image from 'next/image';

function MyNavbar() {

  return (
    <>
      <header className={Styles.headerImages}>
        <figure className={Styles.logoFigure}>
          <Image className={Styles.logo} src={logo} alt='logo' width={160} />
          <figcaption>Candace C. Jackson</figcaption>
        </figure>
        <Image className={Styles.topPlant} src={watercolorVine} alt="vine" width={500} />
      </header>
      <Navbar expand="lg">
        <div className='container'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className={Styles.navbarContents} id="basic-navbar-nav">
            <Nav>
              <Nav.Link
                as={Link}
                className={Styles.mainLink}
                href="/"
                scroll={false}>
                Home
              </Nav.Link>
              <NavDropdown className={Styles.mainLink} title="Explore" id="basic-nav-dropdown">
                {Categories.map(category => {
                  return (
                    <NavDropdown.Item key={category.id}
                      className={Styles.childLink}
                    // onClick={() => onGalleryClick(category.id)}
                    >
                      {category.name}
                    </NavDropdown.Item>
                  )
                })}
              </NavDropdown>
              <Nav.Link
                as={Link}
                className={Styles.mainLink}
                href="/about"
                scroll={false}>
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={Styles.mainLink}
                href="/contact"
                scroll={false}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default MyNavbar;