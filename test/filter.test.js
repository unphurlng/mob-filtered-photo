const test = QUnit.test;

QUnit.module('Filter Testing');

const images = [
    { title: 'image1', keyword: 'blue', horns: 1 },
    { title: 'image2', keyword: 'blue', horns: 2 },
    { title: 'image3', keyword: 'green', horns: 2 },
];

const filtered = { keyword: 'blue' };

function filterImages(images, filtered) {
    return images.filter((image) => {
        const hasKeyword = image.keyword === filtered.keyword;
        return hasKeyword;  
    });
}

test('get the right array using keyword', assert => {
    //arrange
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
    ];
    //act
    const result = filterImages(images, filtered);
    //assert
    assert.deepEqual(result, expected);
});