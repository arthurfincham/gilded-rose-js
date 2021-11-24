const StandardItem = require('./standard_item');
const ConjuredItem = require('./conjured_item');
const AgedBrie = require('./aged_brie');
const BackstagePass = require('./backstage_pass');
const LegendaryItem = require('./legendary_item');

class Shop {
  constructor(items = []) {
    this.items = items.map((item) => this.itemClass(item));
  }
  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
  }
  itemClass(item) {
    if (item.name.includes('Sulfuras')) {
      return new LegendaryItem(item);
    }
    else if (item.name.includes('Aged Brie')) {
      return new AgedBrie(item);
    }
    else if (item.name.includes('Backstage passes')) {
      return new BackstagePass(item);
    }
    else if (item.name.includes('Conjured')) {
      return new ConjuredItem(item);
    }
    else {
      return new StandardItem(item);
    }
    
  }
}

module.exports = Shop;
