import filterImages from '../src/filter.js';
const test = QUnit.test;

QUnit.module('Filter Testing');

const images = [
    { title: 'image1', keyword: 'blue', horns: 1 },
    { title: 'image2', keyword: 'blue', horns: 2 },
    { title: 'image3', keyword: 'green', horns: 2 },
];


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
test('if user inputs no parameters, dont filter and display all images', assert => {
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'green', horns: 2 },
    ];
    const filtered = { keyword: '', horns: null };
    const result = filterImages(images, filtered);

    assert.deepEqual(result, expected);
});

test('if user inputs into keyword and horn, return target', assert => {
    const expected = [
        { title: 'image3', keyword: 'green', horns: 2 },
    ];
    const filtered = { keyword: 'green', horns: 2 };
    const result = filterImages(images, filtered);

    assert.deepEqual(result, expected);
});

