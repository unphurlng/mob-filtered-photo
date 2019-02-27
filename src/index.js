import images from '../data/images.js';
import createTemplate from '../src/createTemplate.js';
import filterImages from './filter.js';
import loadImages from './image.js';
import { loadFilter } from './load-filter.js';

loadImages(images);

loadFilter(filtered => {
    const filteredImages = filterImages(images, filtered);
    loadImages(filteredImages);
});



//take filtered and pass through filterImages (updated array)
//take result of updated array (filterImages) function
//run through createTemplate
    //searchResults.forEach




//add function to delete old search images
