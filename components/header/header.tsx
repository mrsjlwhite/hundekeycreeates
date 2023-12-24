import './_header.module.scss';
import logo from '../../public/imgs/logo.png';
import watercolorVine from '../../public/imgs/watercolor-plant.png';
import Image from 'next/image';

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
        <Image className='logo' src={logo} alt='logo' />
        <figcaption>Candace C. Jackson</figcaption>
      </figure>
      <Image className='top-plant animate__fadeIn' src={watercolorVine} alt="vine" />
    </header>
  )
}

export default Header;