import React from "react";
import ImageGallery from 'react-image-gallery';
import Art from "../../data/art";

function Carousel() {
    return (
        <ImageGallery items={Art} />
    )
}

export default Carousel;