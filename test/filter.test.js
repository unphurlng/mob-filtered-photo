const test = QUnit.test;

QUnit.module('Filter Testing');

const images = [
    { title: 'image1', keyword: 'blue', horns: 1 },
    { title: 'image2', keyword: 'blue', horns: 2 },
    { title: 'image3', keyword: 'green', horns: 2 },

];

test('get the right array using keyword', assert => {
    //arrange
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
    ];
    //act
    const result = filter(images);
    //assert
    assert.deepEqual(result, expected);
});