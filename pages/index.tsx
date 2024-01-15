import ArchGallery from '../components/archGallery/ArchGallery';
import Link from 'next/link';
import SectionContainer from '../containers/SectionContainer';
import AboutSummary from '../data/aboutSummary';

export default function Index() {

    return (
        <>
            <SectionContainer title='Meet Candi'>
                <ul className='list-unstyled text-center'>
                    {AboutSummary.map((a, i) => {
                        return i % 2 ? (<li key={a}><p>{a}</p></li>) : (<li key={a}><h5>{a}</h5></li>);
                    })}
                </ul>
            </SectionContainer>
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
