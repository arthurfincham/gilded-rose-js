const StandardItem = require('../src/standard_item')
const MockItem = require('./mock_item')

describe('Standard Item', () => {
  const standard_item = new StandardItem(new MockItem('Standard', 10, 10))
  beforeEach(() => {
    standard_item.update();
  })
  test('quality reduces by 1', () => {
    expect(standard_item.item.quality).toEqual(9)
  });
  test('sellIn reduces by 1', () => {
    expect(standard_item.item.sellIn).toEqual(8);
  });

  
});