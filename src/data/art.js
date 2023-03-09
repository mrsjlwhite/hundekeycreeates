import Categories from "./categories";

const illustrations = 'illustrations';
const illustrationsId = 3;
const illustrationsCount = 10;

const graphicDesign = 'graphicdesign';
const graphicDesignId = 4;
const graphicDesignCount = 10;

const tdDesign = '3ddesign';
const tdDesignId = 8;
const tdDesigngCount = 2;

const Art = [];

const createImageObjects = (count, categoryId) => {
    for (let i = 0; i < count; i++) {
        const category = Categories.find(c => c.id === categoryId);

        const name = `${category.filename}(${i}).jpg`;
        const path = `img/${name}`; //deployedPath
        // const path = `../../../public/img/${name}`; //localPath

        Art.push({
            id: Art.length + 1,
            filename: name,
            categoryId: categoryId,
            path: path,
            originalAlt: category.name,
            isVideo: false
        });
    }
}

const createVideoObjects = (categoryId, alt) => {
    Art.push({
        id: Art.length + 1,
        categoryId: categoryId,
        originalAlt: alt,
        isVideo: true
    });
}

Categories.forEach(category => {
    switch (category.filename) {
        case graphicDesign:
            createImageObjects(graphicDesignCount, graphicDesignId);
            break;
        case tdDesign:
            createImageObjects(tdDesigngCount, tdDesignId);
            break;
        case illustrations:
            createImageObjects(illustrationsCount, illustrationsId);
            break;
        default:
            break;
    }
});

export default Art;