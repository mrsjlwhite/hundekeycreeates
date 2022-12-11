import './styles/_app.scss';
import MyNavbar from './components/navbar/navbar';
import ArtGallery from './components/artGallery/artGallery';
import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import vine from './assets/img/vine.png';
import Footer from './components/footer/footer';
import AboutMe from './components/aboutMe/aboutMe';
import ContactMe from './components/contactMe/contactMe';
import Header from './components/header/header';

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
      <Header></Header>
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
