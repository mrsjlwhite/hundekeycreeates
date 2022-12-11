import React, { useState, useEffect } from "react";
import './_artGallery.scss';
import Container from "react-bootstrap/esm/Container";
import Art from "../../data/art";
import CarouselModal from "../carouselModal/carouselModal";

function ArtGallery({ selectedCategoryId }) {
    const [artPieces, setArtPieces] = useState([]);
    const [selectedImageId, setSelectedImageId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const mappedArt = Art.map((artObj) => {
            if (selectedCategoryId !== artObj.categoryId && selectedCategoryId !== 0) {
                return null;
            }
            return (
                <img key={artObj.id}
                    className="img-fluid"
                    src={`img/${artObj.filename}`} //deployedPath 
                    // src={require(`/public/img/${artObj.filename}`)} //localPath
                    onClick={() => onImageClick(artObj.id)}
                    alt={artObj.filename} />
            )
        })
        setArtPieces(mappedArt);
    }, [selectedCategoryId]);

    const onImageClick = (imageId) => {
        setSelectedImageId(imageId);
        setShowModal(true);
    };

    return (
        <Container>
            <CarouselModal
                selectedImageId={selectedImageId}
                setShowModal={setShowModal}
                showModal={showModal}>
            </CarouselModal>
            <div className="art-gallery-container">
                {artPieces}
            </div>
        </Container>
    )
}

export default ArtGallery;