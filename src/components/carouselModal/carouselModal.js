import React, { useEffect, useState } from "react";
import "./_carouselModal.scss";
import { Carousel, Modal } from "react-bootstrap";

function CarouselModal({ selectedArtPieces, selectedImageId, setSelectedImageId, setShowModal, showModal }) {
    const [artCarouselItems, setCarouselItems] = useState([]);
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    const [modalTitle, setModalTitle] = useState("");

    //#region MappedCarouselItems
    useEffect(() => {
        if (!selectedArtPieces || !selectedArtPieces.length) {
            return;
        }

        const mappedArt = selectedArtPieces.map((artObj) => {
            if (artObj.id === activeGalleryIndex + 1) {
                setModalTitle(artObj.originalAlt);
            }

            return (
                <Carousel.Item key={artObj.id}>
                    <img
                        className="carousel-image"
                        // src={`img/${artObj.filename}`} //deployedPath 
                        src={require(`/public/img/${artObj.filename}`)} //localPath
                        alt={artObj.originalAlt}
                    />
                </Carousel.Item>
            )
        })
        setCarouselItems(mappedArt);
    }, [selectedArtPieces, activeGalleryIndex, setModalTitle, setCarouselItems]);
    //#endregion

    //#region Setting Selected Image
    useEffect(() => {
        if (selectedImageId && selectedArtPieces.length) {
            const index = selectedArtPieces.findIndex(a => a.id === selectedImageId);
            setActiveGalleryIndex(index);
        }
    }, [selectedImageId, selectedArtPieces]);
    //#endregion

    //#region Handle Arrow Clicks
    useEffect(() => {
        const prevArrow = document.getElementsByClassName("carousel-control-prev")[0];
        const nextArrow = document.getElementsByClassName("carousel-control-next")[0];

        if (!prevArrow && !nextArrow && !showModal) {
            return;
        }

        const handleArrowClicked = (index, direction) => {
            if (!selectedArtPieces || !selectedArtPieces.length) {
                return;
            }

            const artItemsIndexMax = selectedArtPieces.length - 1;

            if (activeGalleryIndex === 0 && direction === "prev") {
                setSelectedImageId(selectedArtPieces[artItemsIndexMax].id);
                return;
            }

            if (activeGalleryIndex === artItemsIndexMax && direction === "next") {
                setSelectedImageId(selectedArtPieces[0].id);
                return;
            }
            setSelectedImageId(selectedArtPieces[index].id);
        }

        const onNextArrowClicked = () => handleArrowClicked(activeGalleryIndex + 1, "next");
        const onPrevArrowClicked = () => {
            const index = activeGalleryIndex > 0 ? activeGalleryIndex - 1 : 0;
            handleArrowClicked(index, "prev");
        };

        prevArrow.addEventListener('click', onPrevArrowClicked);
        nextArrow.addEventListener('click', onNextArrowClicked);
        return () => {
            prevArrow.removeEventListener('click', onPrevArrowClicked);
            nextArrow.removeEventListener('click', onNextArrowClicked);
        }
    }, [showModal, selectedArtPieces, setSelectedImageId, activeGalleryIndex]);
    //#endregion

    return (
        <Modal
            show={showModal}
            className="carousel-modal"
            onHide={() => setShowModal(false)}
            size="lg">
            <Modal.Header className="modal-title" closeButton>
                {modalTitle}
            </Modal.Header>
            <Modal.Body>
                <Carousel
                    className="carousel-in-modal"
                    variant="dark"
                    indicators={false}
                    interval={null}
                    activeIndex={activeGalleryIndex}>
                    {artCarouselItems}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
}

export default CarouselModal;