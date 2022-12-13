import React from "react";
import './_header.scss';
import logo from '../../assets/img/logo.png';
import watercolorVine from '../../assets/img/watercolor-plant.png';

function Header({ setSelectedCategoryId, setShowGallery, setShowAboutMe, setShowContactMe }) {

  const onLogoClick = () => {
    setSelectedCategoryId(0);
    setShowAboutMe(false);
    setShowContactMe(false);
    setShowGallery(true);
  };

  return (
    <header className='header-images'>
      <figure className='logo-figure' onClick={onLogoClick}>
        <img className='logo' src={logo} alt='logo'></img>
        <figcaption>Candace C. Jackson</figcaption>
      </figure>
      <img className='top-plant animate__fadeIn' src={watercolorVine} alt="vine"></img>
    </header>
  )
}

export default Header;