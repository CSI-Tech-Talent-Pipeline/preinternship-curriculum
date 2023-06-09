const findMax = require('./findMax');

describe('findMax function returns the maximum number in an array', () => {
  test("findMax([]) => null", () => {
    expect(findMax([])).toEqual(null);
  });
  
  test("findMax([1]) => 1", () => {
    expect(findMax([1])).toEqual(1);
  })

  test("findMax([1,2,5,4,3] => 5", () => {
    expect(findMax([1, 2, 5, 4, 3])).toEqual(5);
  })
})