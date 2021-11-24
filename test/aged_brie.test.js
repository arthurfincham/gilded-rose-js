const AgedBrie = require('../src/aged_brie.js')
const MockItem = require('./mock_item')

describe('Aged Brie', () => {
  const mock_item = new MockItem('Aged Brie', 10, 10)
  const subject = new AgedBrie(mock_item);

  test('should increase the quality of the item', () => {
    subject.update
    expect(subject.item.quality).toEqual(11)
  });
});