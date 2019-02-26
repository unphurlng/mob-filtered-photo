const test = QUnit.test;

QUnit.module('URL and title:');

const image = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
};

function createTemplate(image) {
    return `
        <li>
            <p>${image.title}</p>
            <img src="${image.url}">
        </li>
        `;
}

test('dynamically displays images and their keys', assert => {
    //arrange

    const expected = `
        <li>
            <p>UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
        `;

    //act
    const result = createTemplate(image);

    //assert
    assert.equal(result, expected);
});