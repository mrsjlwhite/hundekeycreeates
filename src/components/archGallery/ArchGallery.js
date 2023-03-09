import React, { useEffect, useState } from 'react'
import './_archGallery.scss';
import { Container, Row } from 'react-bootstrap';
import Categories from '../../data/categories';
// import 3ddesign(0) from '../../../public/img/3ddesign(0).jpg'

const ArchGallery = () => {
    const [archCategories, setArchCategories] = useState([]);

    useEffect(() => {
        const categories = [...Categories];
        setArchCategories(categories);
    }, [])

    return (
        <Row>
            <Container>
                <h2 className='arch-title'>My Work</h2>
                <div className='arch-container'>
                    {archCategories.map((category, index) => {
                        return (
                            <div key={index} className='arch'>
                                <div className='arch-img img-fluid'>
                                    <img
                                        src={require(`../../../public/img/${category.filename}(${category.favoritePieceNumber}).jpg`)}
                                        alt={`${category.name} art example`}>
                                    </img>
                                </div>
                                <div className='arch-content'>
                                    <h4>{category.name}</h4>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Row>
    )
}

export default ArchGallery;