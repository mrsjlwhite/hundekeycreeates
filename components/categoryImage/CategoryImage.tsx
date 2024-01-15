import Image, { StaticImageData } from 'next/image';
import illustration from '../../public/imgs/categories/illustrations(0).jpg';
import graphicdesign from '../../public/imgs/categories/graphic-design(9).jpg';
import threeddesign from '../../public/imgs/categories/3d-design(0).jpg';
import { useEffect, useState } from 'react';
import { Projects } from '../../constants/projects';

type Props = {
    name: string
}

const CategoryImage = ({ name }: Props) => {
    const [imgSrc, setImgSrc] = useState<StaticImageData>();

    useEffect(() => {
        switch (name) {
            case Projects.illustrations:
                setImgSrc(illustration);
                break;
            case Projects.graphicDesign:
                setImgSrc(graphicdesign);
                break;
            case Projects.threeDesign:
                setImgSrc(threeddesign);
                break;
        }
    }, [name])

    return (
        <Image
            src={imgSrc}
            alt={`${name} art example`}
            height={900}
            width={400}>
        </Image>
    )
}

export default CategoryImage