import { useState, useEffect } from "react";
import './_artGallery.module.scss';
import Container from "react-bootstrap/esm/Container";
import Art from "../../data/art";
import CarouselModal from "../carouselModal/carouselModal";

function ArtGallery({ selectedCategoryId }) {
    const [categorySelectedArtwork, setCategorySelectedArtwork] = useState([]);
    const [artGalleryPieces, setArtGalleryPieces] = useState([]);
    const [selectedImageId, setSelectedImageId] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const selectedArtwork = selectedCategoryId === 0 ? Art : Art.filter(artObj => selectedCategoryId === artObj.categoryId);
        setCategorySelectedArtwork(selectedArtwork);
    }, [selectedCategoryId, setCategorySelectedArtwork])

    useEffect(() => {
        const mappedArt = categorySelectedArtwork.map((artObj) => {
            // if (artObj.isVideo) {
            //     return (
            //         <video
            //             key={artObj.id}
            //             className="img-fluid"
            //             onClick={() => onImageClick(artObj.id)}>
            //             <source src={ceramicsVideo} type="video/mp4"></source>
            //         </video>
            //     )
            // }

            return (
                <img
                    key={artObj.id}
                    className="img-fluid"
                    src={`img/${artObj.filename}`} //deployedPath 
                    // src={require(`/public/img/${artObj.filename}`)} //localPath
                    onClick={() => onImageClick(artObj.id)}
                    alt={artObj.filename} />
            )
        })

        setArtGalleryPieces(mappedArt);
    }, [categorySelectedArtwork, setArtGalleryPieces]);

    const onImageClick = (imageId) => {
        setSelectedImageId(imageId);
        setShowModal(true);
    };

    return (
        <Container>
            <CarouselModal
                selectedArtPieces={categorySelectedArtwork}
                selectedImageId={selectedImageId}
                setSelectedImageId={setSelectedImageId}
                setShowModal={setShowModal}
                showModal={showModal}>
            </CarouselModal>
            <div className="art-gallery-container">
                {artGalleryPieces}
            </div>
        </Container>
    )
}

export default ArtGallery;