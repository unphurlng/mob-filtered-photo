const test = QUnit.test;

QUnit.module('Filter Testing');

const images = [
    { title: 'image1', keyword: 'blue', horns: 1 },
    { title: 'image2', keyword: 'blue', horns: 2 },
    { title: 'image3', keyword: 'green', horns: 2 },
];


function filterImages(images, filtered) {
    return images.filter((image) => {
        const hasKeyword = !filtered.keyword || image.keyword === filtered.keyword;
        
        const hasHorns = !filtered.horns || image.horns >= filtered.horns;
        return hasKeyword && hasHorns;  
    });
}

test('get the right array using keyword', assert => {
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
    ];

    const filtered = { keyword: 'blue' };
    const result = filterImages(images, filtered);

    assert.deepEqual(result, expected);
});

test('get horns property', assert => {
    const expected = [
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'green', horns: 2 }
    ];

    const filtered = { keyword: '', horns: 2 };
    const result = filterImages(images, filtered);

    assert.deepEqual(result, expected);
});