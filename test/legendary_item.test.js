const MockItem = require('./mock_item')
const LegendaryItem = require('../src/legendary_item')

describe('Legendary Item', () => {
  const legendary_item = new LegendaryItem(new MockItem("Sulfuras", 50, 80))
  test('should not change its sellIn', () => {
    legendary_item.update
    expect(legendary_item.item.sellIn).toEqual(50)
  });
  test('should not change its quality', () => {
    legendary_item.update;
    expect(legendary_item.item.quality).toEqual(80);
  });
})
