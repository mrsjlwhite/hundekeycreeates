import Image, { StaticImageData } from 'next/image';
import illustration from '../../public/imgs/categories/illustrations(0).jpg';
import graphicdesign from '../../public/imgs/categories/graphicdesign(9).jpg';
import threeddesign from '../../public/imgs/categories/3ddesign(0).jpg';
import { useEffect, useState } from 'react';

type Props = {
    name: string
}

const CategoryImage = ({ name }: Props) => {
    const [imgSrc, setImgSrc] = useState<StaticImageData>();

    useEffect(() => {
        switch (name) {
            case 'Illustrations':
                setImgSrc(illustration);
                break;
            case 'Graphic Design':
                setImgSrc(graphicdesign);
                break;
            case '3D Design':
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