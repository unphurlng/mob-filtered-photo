const test = QUnit.test;

QUnit.module('URL and title:');

const image = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
};

function createTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <p>${image.title}</p>
            <img src="${image.url}">
        </li>
        `;
    return template.content;    
}

test('dynamically displays images and their keys', assert => {
    const expected = `
        <li>
            <p>UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
        `;

    const result = createTemplate(image);

    assert.htmlEqual(result, expected);
});

