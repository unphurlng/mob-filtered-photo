import images from '../data/images.js';
import { createTemplate } from '../src/createTemplate.js';

const imageContainer = document.getElementById('image-container');

images.forEach(image => {
    const dom = createTemplate(image);
    imageContainer.appendChild(dom);
});