import React, { useEffect, useState } from "react";
import "./_carouselModal.scss";
import Art from "../../data/art";
import { Carousel, Modal } from "react-bootstrap";

function CarouselModal({ selectedImageId, setShowModal, showModal }) {
    const [carouselArtItems, setCarouselItems] = useState([]);
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    const [modalTitle, setModalTitle] = useState("");
    // const leftKey = 37;
    // const rightKey = 39;

    useEffect(() => {
        const mappedArt = Art.map((artObj) => {
            if (artObj.id === activeGalleryIndex - 1) {
                setModalTitle(artObj.originalAlt);
            }

            return (
                <Carousel.Item key={artObj.id}>
                    <img
                        className="carousel-image"
                        //src={`img/${art.filename}`} //deployedPath 
                        src={require(`/public/img/${artObj.filename}`)} //localPath
                        alt={artObj.originalAlt}
                    />
                </Carousel.Item>
            )
        })
        setCarouselItems(mappedArt);
    }, [activeGalleryIndex, setModalTitle, setCarouselItems]);

    useEffect(() => {
        const index = selectedImageId ? selectedImageId - 1 : 0;
        setActiveGalleryIndex(index);
    }, [selectedImageId]);

    const handleClose = () => setShowModal(false);

    return (
        <Modal
            show={showModal}
            className="carousel-modal"
            onHide={handleClose}
            size="lg"
            tabIndex="1"
            keyboard={true}>
            <Modal.Header className="modal-title" closeButton>
                {modalTitle}
            </Modal.Header>
            <Modal.Body>
                <Carousel
                    className="carousel-in-modal"
                    indicators={false}
                    interval={null}
                    activeIndex={activeGalleryIndex}
                    keyboard={true}>
                    {carouselArtItems}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
}

export default CarouselModal;