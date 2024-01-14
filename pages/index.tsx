import ArchGallery from '../components/archGallery/ArchGallery';
import Link from 'next/link';

export default function Index() {

    return (
        <>
            <ArchGallery />
            <div className='text-center'>
                <Link
                    className='btn btn-outline-secondary'
                    href='/about'
                    scroll={false}>
                    Learn More
                </Link>
            </div>
        </>
    );
}
