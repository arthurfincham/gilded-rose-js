const AgedBrie = require('../src/aged_brie.js')
const MockItem = require('./mock_item')

describe('Aged Brie', () => {
  const mock_item = new MockItem('Aged Brie', 10, 47)
  const mock_old_item = new MockItem('Aged Brie', -10, 40);
  const subject = new AgedBrie(mock_item);

  test('should increase the quality of the item', () => {
    subject.update()
    expect(subject.item.quality).toEqual(48)
  });
  test('should cap quality at 50', () => {
    subject.update()
    subject.update()
    expect(subject.item.quality).toEqual(50)
  });
  const old_subject = new AgedBrie(mock_old_item);
  test('should increase the quality by 2 if sellIn is past', () => {
    old_subject.update();
    expect(old_subject.item.quality).toEqual(42);
  });
});