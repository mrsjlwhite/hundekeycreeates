import { useEffect, useState } from 'react';
import Styles from './_archGallery.module.scss';
import { Categories } from '../../data/categories';
import CategoryImage from '../categoryImage/CategoryImage';
import { useRouter } from 'next/navigation';

const ArchGallery = () => {
    const router = useRouter();
    const [archCategories, setArchCategories] = useState([]);

    useEffect(() => {
        const categories = [...Categories];
        setArchCategories(categories);
    }, [Categories])

    return (
        <div className='row'>
            <div className='container'>
                <h2 className={Styles.archTitle}>
                    My Work
                </h2>
                <div className={Styles.archContainer}>
                    {archCategories.map((category, index) => {
                        return (
                            <div key={index} className={Styles.arch} onClick={() => router.push(`/gallery/${category.link}`)}>
                                <div className={Styles.archImg}>
                                    <CategoryImage name={category.name} />
                                </div>
                                <div className={Styles.archContent}>
                                    <h4 className={Styles.contentTitle}>
                                        {category.name}
                                    </h4>
                                    <p className={Styles.contentDesc}>
                                        {category.description}
                                    </p>
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