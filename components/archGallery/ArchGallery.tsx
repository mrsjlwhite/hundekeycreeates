import { useEffect, useState } from 'react';
import './_archGallery.module.scss';
import Categories from '../../data/categories';
import Image from 'next/image';
// import 3ddesign(0) from '../../../public/img/3ddesign(0).jpg'

const ArchGallery = () => {
    const [archCategories, setArchCategories] = useState([]);

    useEffect(() => {
        const categories = [...Categories];
        setArchCategories(categories);
    }, [])

    return (
        <div className='row'>
            <div className='container'>
                <h2 className='arch-title'>My Work</h2>
                <div className='arch-container'>
                    {archCategories.map((category, index) => {
                        return (
                            <div key={index} className='arch'>
                                <div className='arch-img img-fluid'>
                                    <Image
                                        src={`/public/img/${category.filename}(${category.favoritePieceNumber}).jpg`}
                                        alt={`${category.name} art example`}
                                        height={300}
                                        width={200}>
                                    </Image>
                                </div>
                                <div className='arch-content'>
                                    <h4>{category.name}</h4>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArchGallery;