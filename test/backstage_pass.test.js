const BackstagePass = require('../src/backstage_pass.js')
const MockItem = require('./mock_item')

describe('Backstage Pass > 10 days', () => {
  const mock_item = new MockItem('Backstage pass', 12, 30)
  const subject = new BackstagePass(mock_item)
  it('should increase quality by 1', () => {
    subject.update()
    expect(subject.item.quality).toEqual(31)
  });
});

describe('Backstage Pass 10 > 6 days', () => {
  const mock_item = new MockItem('Backstage pass', 7, 30);
  const subject = new BackstagePass(mock_item);
  it('should increase quality by 2', () => {
    subject.update();
    expect(subject.item.quality).toEqual(32);
  });
});

describe('Backstage Pass 5 > 0 days', () => {
  const mock_item = new MockItem('Backstage pass', 3, 30);
  const subject = new BackstagePass(mock_item);
  it('should increase quality by 3', () => {
    subject.update();
    expect(subject.item.quality).toEqual(33);
  });
});

describe('Backstage Pass after event', () => {
  const mock_item = new MockItem('Backstage pass', 0, 30);
  const subject = new BackstagePass(mock_item);
  it('should set quality at zero', () => {
    subject.update();
    expect(subject.item.quality).toEqual(0);
  });
});