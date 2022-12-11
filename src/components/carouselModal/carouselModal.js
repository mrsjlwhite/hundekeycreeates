import React, { useEffect, useState } from "react";
import "./_carouselModal.scss";
import Carousel from 'react-bootstrap/Carousel';
import Art from "../../data/art";

function CarouselModal({ selectedImageId }) {
    const [carouselArtItems, setCarouselItems] = useState([]);

    useEffect(() => {
        const mappedArt = Art.map((artObj) => {
            return (
                <Carousel.Item key={artObj.id}>
                    <img
                        className="carousel-image"
                        //src={`img/${art.filename}`} //deployedPath 
                        src={require(`/public/img/${artObj.filename}`)} //localPath
                        alt={artObj.originalAlt}
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>{artObj.originalAlt}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
        setCarouselItems(mappedArt);
    }, []);

    return (
        <Carousel className="carousel-modal"
            indicators={false}
            interval={null}
            activeIndex={selectedImageId - 1}>
            {carouselArtItems}
        </Carousel>
    );
}

export default CarouselModal;