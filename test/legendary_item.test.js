const MockItem = require('./mock_item');
const LegendaryItem = require('../src/legendary_item');

describe('Legendary Item', () => {
  let subject;
  beforeEach(() => {
    subject = new LegendaryItem(new MockItem('Sulfuras', 50, 80));
    subject.update();
  });
  test('should not change its sellIn', () => {
    expect(subject.item.sellIn).toEqual(50);
  });
  test('should not change its quality', () => {
    expect(subject.item.quality).toEqual(80);
  });
});
