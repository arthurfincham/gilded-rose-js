const StandardItem = require('../src/standard_item')
const MockItem = require('./mock_item')

describe('Standard Item', () => {
  const subject = new StandardItem(new MockItem('Standard', 10, 10))
  beforeEach(() => {
    subject.update();
  })
  test('quality reduces by 1', () => {
    expect(subject.item.quality).toEqual(9)
  });
  test('sellIn reduces by 1', () => {
    expect(subject.item.sellIn).toEqual(8);
  });

  test('quality is capped at a high of 50', () => {
    const high_item = new StandardItem(new MockItem('Standard', 10, 60));
    high_item.update();
    expect(high_item.item.quality).toEqual(50)
  });

  test('quality is capped at a low of 0', () => {
    const low_item = new StandardItem(new MockItem('Standard', 10, -5));
    low_item.update();
    expect(low_item.item.quality).toEqual(0);
  });
  
});