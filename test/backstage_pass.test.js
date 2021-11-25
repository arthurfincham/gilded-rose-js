const BackstagePass = require('../src/backstage_pass.js');
const MockItem = require('./mock_item');

let subject;
let sellIn = 15;
beforeEach(() => {
  subject = new BackstagePass(new MockItem('Backstage pass', sellIn, 30));
  subject.update();
  sellIn -= 5;
});

describe('Backstage Pass > 10 days', () => {
  it('should increase quality by 1', () => {
    expect(subject.item.quality).toEqual(31);
  });
});

describe('Backstage Pass 10 > 6 days', () => {
  it('should increase quality by 2', () => {
    expect(subject.item.quality).toEqual(32);
  });
});

describe('Backstage Pass 5 > 0 days', () => {
  it('should increase quality by 3', () => {
    expect(subject.item.quality).toEqual(33);
  });
});

describe('Backstage Pass after event', () => {
  it('should set quality at zero', () => {
    expect(subject.item.quality).toEqual(0);
  });
});
