import React, { useState, useEffect, useRef } from "react";
import './_artGallery.scss';
import Container from "react-bootstrap/esm/Container";
import Art from "../../data/art";
import CarouselModal from "../carouselModal/carouselModal";

function ArtGallery({ selectedCategoryId }) {
    const galleryRef = useRef(null);
    const [showCarousel, setShowCarousel] = useState(false);
    const [artPieces, setArtPieces] = useState([]);
    const [galleryClass, setGalleryClass] = useState("art-gallery");
    const [selectedImageId, setSelectedImageId] = useState(null);
    const galleryId = 'artGalleryId';

    const onImageClick = (imageId) => {
        setGalleryClass("art-gallery-faded");
        setSelectedImageId(imageId);
        setShowCarousel(true);
    };

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
                    onClick={() => onImageClick(artObj.id)}
                    alt={artObj.filename} />
            )
        })
        setArtPieces(mappedArt);
    }, [selectedCategoryId]);

    // useEffect(() => {
    //     const outsideModalClicked = () => {
    //         setGalleryClass("art-gallery");
    //         setShowCarousel(false);
    //         setSelectedImageId(null);
    //     };

    //     const handleClickOutsideModal = (event) => {
    //         if (galleryRef.current && !galleryRef.current.contains(event.target)) {
    //             outsideModalClicked();
    //         } else {
    //             // setSelectedImageId(selectedImageId + 1)
    //         }
    //     };

    //     const body = document.getElementsByTagName("body");
    //     const galleryEl = document.getElementById(galleryId);
    //     body.addEventListener("click", (e) => handleClickOutsideModal(e))
    //     galleryEl.addEventListener("click", (e) => e.stopPropagation());

    //     // galleryEl.addEventListener("click", handleClickOutsideModal, false);

    //     return () => {
    //         // galleryEl.removeEventListener("click", handleClickOutsideModal, false);
    //         galleryEl.removeEventListener("click", (e) => e.stopPropagation());

    //     };
    //     // $('body').on('click', function(e) {
    //     //     $('#carouSel').hide();
    //     //  });

    //     //  $('#carouSel').on('click', function(e) {
    //     //     e.stopPropagation();
    //     //  });
    // }, [selectedImageId]);

    return (
        <Container>
            <div className="carousel-container">
                {showCarousel &&
                    <CarouselModal selectedImageId={selectedImageId}></CarouselModal>
                }
            </div>
            <div id={galleryId}
                className={galleryClass}
                ref={galleryRef}>
                {artPieces}
            </div>
        </Container>
    )
}

export default ArtGallery;