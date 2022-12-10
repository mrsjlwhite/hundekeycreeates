import './styles/_app.scss';
import MyNavbar from './components/navbar/navbar';
import ArtGallery from './components/artGallery/artGallery';
import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logo from './assets/img/logo.png';
import vine from './assets/img/vine.png';
import watercolorVine from './assets/img/watercolor-plant.png';
import Footer from './components/footer/footer';
import AboutMe from './components/aboutMe/aboutMe';
import ContactMe from './components/contactMe/contactMe';
import "react-image-gallery/styles/scss/image-gallery.scss";

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [showGallery, setShowGallery] = useState(true);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);

  const GallerySection = () => {
    return (
      <>
        <ArtGallery selectedCategoryId={selectedCategoryId}></ArtGallery>
        <AnimationOnScroll animateIn="animate__fadeInBottomRight" animateOut='animate__fadeOutBottomRight'>
          <img className='bottom-plant' src={vine} alt="vine"></img>
        </AnimationOnScroll>
      </>
    )
  };

  return (
    <div className="app">
      <header className='header-images'>
        <figure className='logo-figure'>
          <img className='logo' src={logo} alt='logo'></img>
          <figcaption>Candace C. Jackson</figcaption>
        </figure>
        <img className='top-plant animate__fadeIn' src={watercolorVine} alt="vine"></img>
      </header>
      <MyNavbar 
        setSelectedCategoryId={setSelectedCategoryId}
        setShowGallery={setShowGallery}
        setShowAboutMe={setShowAboutMe}
        setShowContactMe={setShowContactMe}>
      </MyNavbar>
      {showGallery &&
        <GallerySection></GallerySection>
      }
      {showAboutMe &&
        <AboutMe></AboutMe>
      }
      {showContactMe &&
        <ContactMe></ContactMe>
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
