import ArtGallery from '../components/artGallery/artGallery';
import { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import vine from '../public/imgs/vine.png';
import ArchGallery from '../components/archGallery/ArchGallery';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);

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
        <>
            <ArchGallery />
            <div className='text-center'>
                <Link
                    className='btn btn-secondary'
                    href={'about'}>
                    Learn More
                </Link>
            </div>
        </>
    );
}
