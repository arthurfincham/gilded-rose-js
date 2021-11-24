const ConjuredItem = require('../src/conjured_item.js')
const MockItem = require('./mock_item')

describe('Conjured Item', () => {
  const mock_item = new MockItem('Conjured', 10, 10)
  const subject = new ConjuredItem(mock_item)
  it('should lose quality by 2', () => {
    subject.update();
    expect(subject.item.quality).toEqual(8)
  });
});