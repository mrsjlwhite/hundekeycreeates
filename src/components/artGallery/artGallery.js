import React, { useState } from "react";
import './_artGallery.scss';
import Container from "react-bootstrap/esm/Container";
import Art from "../../data/art";
import Carousel from "../carousel/carousel";

function ArtGallery({selectedCategoryId}) {
    const [showCarousel, setShowCarousel] = useState(false);
    
    return (
        <Container>
            <div className="art-gallery">
                {!showCarousel && 
                Art.map(art => {
                    if (selectedCategoryId !== art.categoryId && selectedCategoryId !== 0) {
                        return null;
                    }
                    
                    return (
                            <img key={art.id} 
                                 className="img-fluid" 
                                 src={require(`/public/img/${art.filename}`)} //localPath
                                 //src={require(`img/${art.filename}`)} //deployedPath
                                 onClick={() => setShowCarousel(true)}
                                 alt={art.filename} />
                    )
                })}
            </div>
            <div className="carousel">
            {showCarousel &&
                <Carousel></Carousel>
            }
            </div>
        </Container>
    )
}

export default ArtGallery;