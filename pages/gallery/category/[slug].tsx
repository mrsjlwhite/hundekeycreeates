import { useState, useEffect } from "react";
import Styles from './_gallery.module.scss';
import CarouselModal from "../../../components/carouselModal/carouselModal";
import { useRouter } from "next/router";
import { Categories } from "../../../data/categories";
import ICategory from "../../../interfaces/category";
import Image from "next/image";

export default function Gallery() {
    const router = useRouter();

    const [categorySelectedArtwork, setCategorySelectedArtwork] = useState([]);
    const [artGalleryPieces, setArtGalleryPieces] = useState([]);
    const [selectedImageId, setSelectedImageId] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const createArtObjects = (category: ICategory) => {
        const { projectsCount, link } = category;
        const categoryArt = [];

        for (let i = 0; i < projectsCount; i++) {
            const filename = `${link}(${i}).jpg`;
            const path = `imgs/categories/${filename}`; //deployedPath
            // const path = `../../../public/imgs/categories/${filename}`; //localPath

            categoryArt.push({
                id: categoryArt.length + 1,
                filename: filename,
                path: path,
                originalAlt: name
            });
        }

        return categoryArt;
    }

    useEffect(() => {
        const selectedCategory = router.query.slug;
        const category = Categories.find(x => x.link === selectedCategory);
        const selectedArtwork = createArtObjects(category);
        setCategorySelectedArtwork(selectedArtwork);
    }, [router.query.slug, setCategorySelectedArtwork])

    useEffect(() => {
        const mappedArt = categorySelectedArtwork.map((artObj, index) => {
            return (
                <Image
                    key={artObj.id}
                    priority={index === 0}
                    className="img-fluid"
                    src={artObj.path}
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
        <>
            <CarouselModal
                selectedArtPieces={categorySelectedArtwork}
                selectedImageId={selectedImageId}
                setSelectedImageId={setSelectedImageId}
                setShowModal={setShowModal}
                showModal={showModal}>
            </CarouselModal>
            <div className={Styles.galleryContainer}>
                {artGalleryPieces}
            </div>
        </>
    )
}