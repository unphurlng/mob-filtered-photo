function filterImages(images, filtered) {
    return images.filter((image) => {
        const hasKeyword = !filtered.keyword || image.keyword === filtered.keyword;
        
        const hasHorns = !filtered.horns || image.horns >= filtered.horns;
        return hasKeyword && hasHorns;  
    });
}

export default filterImages;