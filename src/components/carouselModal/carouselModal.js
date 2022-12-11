import React, { useEffect, useState } from "react";
import "./_carouselModal.scss";
import Art from "../../data/art";
import { Carousel, Modal } from "react-bootstrap";

function CarouselModal({ selectedImageId, setShowModal, showModal }) {
    const [carouselArtItems, setCarouselItems] = useState([]);
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    const [modalTitle, setModalTitle] = useState("");

    //#region MappedCarouselItems
    useEffect(() => {
        const mappedArt = Art.map((artObj) => {
            if (artObj.id === activeGalleryIndex + 1) {
                setModalTitle(artObj.originalAlt);
            }

            return (
                <Carousel.Item key={artObj.id}>
                    <img
                        className="carousel-image"
                        src={`img/${artObj.filename}`} //deployedPath 
                        // src={require(`/public/img/${artObj.filename}`)} //localPath
                        alt={artObj.originalAlt}
                    />
                </Carousel.Item>
            )
        })
        setCarouselItems(mappedArt);
    }, [activeGalleryIndex, setModalTitle, setCarouselItems]);
    //#endregion

    //#region Setting Selected Image
    useEffect(() => {
        const index = selectedImageId ? selectedImageId - 1 : 0;
        setActiveGalleryIndex(index);
    }, [selectedImageId]);
    //#endregion

    //# Handle Arrow Clicks
    useEffect(() => {
        const artItemsIndexMax = carouselArtItems.length - 1;

        const handleArrowClicked = (index, direction) => {
            if (activeGalleryIndex === 0 && direction === "prev") {
                setActiveGalleryIndex(artItemsIndexMax);
                return;
            }

            if (activeGalleryIndex === artItemsIndexMax && direction === "next") {
                setActiveGalleryIndex(0);
                return;
            }

            setActiveGalleryIndex(index);
        }

        const onPrevArrowClicked = () => handleArrowClicked(activeGalleryIndex - 1, "prev");
        const onNextArrowClicked = () => handleArrowClicked(activeGalleryIndex + 1, "next");

        const prevArrow = document.getElementsByClassName("carousel-control-prev")[0];
        const nextArrow = document.getElementsByClassName("carousel-control-next")[0];

        if (prevArrow && nextArrow) {
            prevArrow.addEventListener('click', onPrevArrowClicked);
            nextArrow.addEventListener('click', onNextArrowClicked);
            return () => {
                prevArrow.removeEventListener('click', onPrevArrowClicked);
                nextArrow.removeEventListener('click', onNextArrowClicked);
            }
        }
    }, [carouselArtItems, setActiveGalleryIndex, activeGalleryIndex]);
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
                    {carouselArtItems}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
}

export default CarouselModal;