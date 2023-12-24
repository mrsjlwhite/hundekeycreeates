import { useEffect, useState } from 'react';
import Styles from './_archGallery.module.scss';
import { Categories } from '../../data/categories';
import CategoryImage from '../categoryImage/CategoryImage';

const ArchGallery = () => {
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
                            <div key={index} className={Styles.arch}>
                                <div className={Styles.archImg}>
                                    <CategoryImage name={category.name} />
                                </div>
                                <div className={Styles.archContent}>
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