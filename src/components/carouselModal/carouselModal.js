import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Art from "../../data/art";

function CarouselModal() {
    const [carouselArtItems, setCarouselItems] = useState([]);

    useEffect(() => {
        const mappedArt = Art.map((artObj) => {
            return (
                <Carousel.Item key={artObj.id}>
                    <img
                        className="d-block w-100"
                        //src={`img/${art.filename}`} //deployedPath 
                        src={require(`/public/img/${artObj.filename}`)} //localPath
                        alt={artObj.originalAlt}
                    />
                    <Carousel.Caption>
                        <h3>{artObj.originalAlt}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
        setCarouselItems(mappedArt);
    }, []);

    return (
        <Carousel>
            {carouselArtItems}
        </Carousel>
    );
}

export default CarouselModal;