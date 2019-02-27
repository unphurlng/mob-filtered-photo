import createTemplate from './createTemplate.js';
export default function loadImages(images) {
    
    const imageContainer = document.getElementById('image-container');
    
    images.forEach(image => {
        const dom = createTemplate(image);
        imageContainer.appendChild(dom);
    });

}

