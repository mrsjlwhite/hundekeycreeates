import '../styles/index.module.scss';
import MyNavbar from '../components/navbar/navbar';
import ArtGallery from '../components/artGallery/artGallery';
import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import vine from '../public/imgs/vine.png';
import Footer from '../components/footer/footer';
import AboutMe from '../components/aboutMe/aboutMe';
import ContactMe from '../components/contactMe/contactMe';
import Header from '../components/header/header';
import ArchGallery from '../components/archGallery/ArchGallery';
import Image from 'next/image';

export default function Index() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const [showGallery, setShowGallery] = useState(true);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showContactMe, setShowContactMe] = useState(false);

    const GallerySection = () => {
        return (
            <>
                <ArtGallery selectedCategoryId={selectedCategoryId}></ArtGallery>
                <AnimationOnScroll animateIn="animate__fadeInBottomRight" animateOut='animate__fadeOutBottomRight'>
                    <Image src={vine} alt="vine" className='bottom-plant' />
                </AnimationOnScroll>
            </>
        )
    };

    return (
        <div className="app">
            <Header
                setSelectedCategoryId={setSelectedCategoryId}
                setShowGallery={setShowGallery}
                setShowAboutMe={setShowAboutMe}
                setShowContactMe={setShowContactMe}>
            </Header>
            <MyNavbar
                setSelectedCategoryId={setSelectedCategoryId}
                setShowGallery={setShowGallery}
                setShowAboutMe={setShowAboutMe}
                setShowContactMe={setShowContactMe}>
            </MyNavbar>
            {showGallery &&
                // <GallerySection></GallerySection>
                <ArchGallery></ArchGallery>
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
