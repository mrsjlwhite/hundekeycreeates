import { useEffect, useState } from "react";
import Styles from "./_carouselModal.module.scss";
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
            // if (artObj.isVideo) {
            //     return (
            //         <Carousel.Item key={artObj.id}>
            //             <video
            //                 key={artObj.id}
            //                 className="carousel-video"
            //                 width="500px"
            //                 controls
            //                 autoPlay
            //                 muted>
            //                 <source src={ceramicsVideo} type="video/mp4"></source>
            //             </video>
            //         </Carousel.Item >
            //     )
            // }

            return (
                <Carousel.Item key={artObj.id}>
                    <img
                        className={Styles.carouselImage}
                        // src={`img/${artObj.filename}`} //deployedPath 
                        src={artObj.path} //localPath
                        alt={artObj.originalAlt}
                    />
                </Carousel.Item>
            )
        })
        setCarouselItems(mappedArt);
    }, [selectedArtPieces, activeGalleryIndex, setCarouselItems]);
    //#endregion

    //#region Setting Selected Image
    useEffect(() => {
        if (selectedImageId && selectedArtPieces.length) {
            const index = selectedArtPieces.findIndex(a => a.id === selectedImageId);
            setActiveGalleryIndex(index);
            setModalTitle(selectedArtPieces[index].originalAlt);
        }
    }, [selectedImageId, selectedArtPieces, setModalTitle]);
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
            className={Styles.carouselModal}
            onHide={() => setShowModal(false)}
            size="lg">
            <Modal.Header className={Styles.modalTitle} closeButton>
                {modalTitle}
            </Modal.Header>
            <Modal.Body>
                <Carousel
                    className={Styles.carousel}
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