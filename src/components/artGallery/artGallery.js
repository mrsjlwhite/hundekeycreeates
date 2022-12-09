import React from "react";
import './_artGallery.scss';
import Container from "react-bootstrap/esm/Container";
import Art from "../../data/art";

function ArtGallery({selectedCategoryId}) {
    return (
        <Container>
            <div className="art-gallery">
                {Art.map(art => {
                    if (selectedCategoryId !== art.categoryId && selectedCategoryId !== 0) {
                        return null;
                    }
                    
                    return (
                            <img key={art.id} 
                                 className="img-fluid" 
                                 src={`/img/${art.filename}`} 
                                 alt={art.filename} />
                    )
                })}
            </div>
        </Container>
    )
}

export default ArtGallery;