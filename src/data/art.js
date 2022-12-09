import Categories from "./categories";

const typography = 'typography';
const typographyId = 1;
const typographyCount = 5;

const drawing = 'drawing';
const drawingId = 2;
const drawingCount = 5;

const illustrations = 'illustrations';
const illustrationsId = 3;
const illustrationsCount = 10;

const graphicDesign = 'graphicdesign';
const graphicDesignId = 4;
const graphicDesignCount = 10;

const photography = 'photography';
const photographyId = 6;
const photographyCount = 11;

const creativeThinking = 'creativethinking';
const creativeThinkingId = 7;
const creativeThinkingCount = 3;

const tdDesign = '3ddesign';
const tdDesignId = 8;
const tdDesigngCount = 2;

const ceramics = 'ceramics';
const ceramicsId = 9;
const ceramicsCount = 3;

const painting = 'painting';
const paintingId = 10;
const paintingCount = 3;

const Art = [];

const createImageObjects = (count, filename, categoryId) => {
    for (let i = 0; i < count; i++) {
        Art.push({
            id: Art.length + 1,
            filename: `${filename}(${i}).jpg`,
            categoryId: categoryId,
        });
    }   
}

Categories.forEach(category => {
    switch(category.filename) {
        case typography:
            createImageObjects(typographyCount, typography, typographyId);
        break;
        case drawing:
            createImageObjects(drawingCount, drawing, drawingId);
        break;
        case graphicDesign:
            createImageObjects(graphicDesignCount, graphicDesign, graphicDesignId);
        break;
        case photography:
            createImageObjects(photographyCount, photography, photographyId);
        break;
        case creativeThinking:
            createImageObjects(creativeThinkingCount, creativeThinking, creativeThinkingId);
        break;
        case tdDesign:
            createImageObjects(tdDesigngCount, tdDesign, tdDesignId);
        break;
        case ceramics:
            createImageObjects(ceramicsCount, ceramics, ceramicsId);
        break;
        case painting:
            createImageObjects(paintingCount, painting, paintingId);
        break;
        case illustrations:
            createImageObjects(illustrationsCount, illustrations, illustrationsId);
        break;
    default:
        break;
    }
});

export default Art;