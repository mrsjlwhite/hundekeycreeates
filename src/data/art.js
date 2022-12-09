import Categories from "./categories";

const typography = 'Typography';
const typographyId = 1;
const typographyCount = 5;

const drawing = 'Drawing';
const drawingId = 2;
const drawingCount = 5;

const illustrations = 'Illustrations';
const illustrationsId = 3;
const illustrationsCount = 10;

const graphicDesign = 'Graphic design';
const graphicDesignId = 4;
const graphicDesignCount = 10;

const photography = 'Photography';
const photographyId = 6;
const photographyCount = 11;

const creativeThinking = 'Creative thinking';
const creativeThinkingId = 7;
const creativeThinkingCount = 3;

const tdDesign = '3D design';
const tdDesignId = 8;
const tdDesigngCount = 2;

const ceramics = 'Ceramics';
const ceramicsId = 9;
const ceramicsCount = 3;

const painting = 'Painting';
const paintingId = 10;
const paintingCount = 3;

const Art = [];

const createImageObjects = (count, categoryName, categoryId) => {
    for (let i = 0; i < count; i++) {
        Art.push({
            id: Art.length + 1,
            filename: `${categoryName}(${i}).jpg`,
            categoryId: categoryId,
        });
    }   
}

Categories.forEach(category => {
    switch(category.name.toLowerCase()) {
        case typography.toLowerCase():
            createImageObjects(typographyCount, typography, typographyId);
        break;
        case drawing.toLowerCase():
            createImageObjects(drawingCount, drawing, drawingId);
        break;
        case graphicDesign.toLowerCase():
            createImageObjects(graphicDesignCount, graphicDesign, graphicDesignId);
        break;
        case photography.toLowerCase():
            createImageObjects(photographyCount, photography, photographyId);
        break;
        case creativeThinking.toLowerCase():
            createImageObjects(creativeThinkingCount, creativeThinking, creativeThinkingId);
        break;
        case tdDesign.toLowerCase():
            createImageObjects(tdDesigngCount, tdDesign, tdDesignId);
        break;
        case ceramics.toLowerCase():
            createImageObjects(ceramicsCount, ceramics, ceramicsId);
        break;
        case painting.toLowerCase():
            createImageObjects(paintingCount, painting, paintingId);
        break;
        case illustrations.toLowerCase():
            createImageObjects(illustrationsCount, illustrations, illustrationsId);
        break;
    default:
        break;
    }
});

export default Art;