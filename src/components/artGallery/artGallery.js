import React, { useState, useEffect } from "react";
import './_artGallery.scss';
import Container from "react-bootstrap/esm/Container";
import Art from "../../data/art";
import CarouselModal from "../carouselModal/carouselModal";

function ArtGallery({ selectedCategoryId }) {
    const [showCarousel, setShowCarousel] = useState(false);
    const [artPieces, setArtPieces] = useState([]);

    useEffect(() => {
        const mappedArt = Art.map((artObj) => {
            if (selectedCategoryId !== artObj.categoryId && selectedCategoryId !== 0) {
                return null;
            }

            return (
                <img key={artObj.id}
                    className="img-fluid"
                    //src={`img/${artObj.filename}`} //deployedPath 
                    src={require(`/public/img/${artObj.filename}`)} //localPath
                    onClick={() => setShowCarousel(true)}
                    alt={artObj.filename} />
            )
        })
        setArtPieces(mappedArt);
    }, [selectedCategoryId]);

    return (
        <Container>
            <div className="art-gallery">
                {!showCarousel && artPieces}
            </div>
            <div className="carousel-container">
                {showCarousel &&
                    <CarouselModal></CarouselModal>
                }
            </div>
        </Container>
    )
}

export default ArtGallery;