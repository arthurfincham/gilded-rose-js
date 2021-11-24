const MockItem = require('./mock_item')
const LegendaryItem = require('../src/legendary_item')

describe('Legendary Item', () => {
  const subject = new LegendaryItem(new MockItem("Sulfuras", 50, 80))
  test('should not change its sellIn', () => {
    subject.update
    expect(subject.item.sellIn).toEqual(50)
  });
  test('should not change its quality', () => {
    subject.update;
    expect(subject.item.quality).toEqual(80);
  });
})
