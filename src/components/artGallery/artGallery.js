import React, { useState, useEffect } from "react";
import './_artGallery.scss';
import Container from "react-bootstrap/esm/Container";
import Art from "../../data/art";
import CarouselModal from "../carouselModal/carouselModal";
import ceramicsVideo from "../../assets/vid/ceramics.mp4";

function ArtGallery({ selectedCategoryId }) {
    const [artPieces, setArtPieces] = useState([]);
    const [carouselArt, setCarouselArt] = useState([]);
    const [selectedImageId, setSelectedImageId] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const ceramicsId = 9;

    useEffect(() => {
        const selectedArt = [];
        const mappedArt = Art.map((artObj) => {
            if (selectedCategoryId !== artObj.categoryId && selectedCategoryId !== 0) {
                return null;
            }

            selectedArt.push(artObj);

            return (
                <img
                    key={artObj.id}
                    className="img-fluid"
                    // src={`img/${artObj.filename}`} //deployedPath 
                    src={require(`/public/img/${artObj.filename}`)} //localPath
                    onClick={() => onImageClick(artObj.id)}
                    alt={artObj.filename} />
            )
        })

        if (selectedCategoryId === ceramicsId || selectedCategoryId === 0) {
            const videoArtObj = {
                id: Art.length + 1,
                filename: "ceramics.mp4",
                categoryId: ceramicsId,
                originalAlt: "Ceramics (Video)",
                isVideo: true
            }

            selectedArt.push(videoArtObj);

            mappedArt.push((
                <video
                    key={videoArtObj.id}
                    className="img-fluid"
                    onClick={() => onImageClick(videoArtObj.id)}
                    src={ceramicsVideo}
                    type="video/mp4">
                </video>
            ))
        }

        setArtPieces(mappedArt);
        setCarouselArt(selectedArt);
    }, [selectedCategoryId, setArtPieces, setCarouselArt]);

    const onImageClick = (imageId) => {
        setSelectedImageId(imageId);
        setShowModal(true);
    };

    return (
        <Container>
            <CarouselModal
                selectedArtPieces={carouselArt}
                selectedImageId={selectedImageId}
                setSelectedImageId={setSelectedImageId}
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