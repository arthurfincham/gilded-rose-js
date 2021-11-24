const StandardItem = require('./standard_item');

class AgedBrie extends StandardItem {
  update() {
    if (this.item.sellIn <= 0) {
      this.item.quality += 2;
    } else {
      this.item.quality += 1;
    }
    this.item.sellIn -= 1;
    this.quality_cap();
  }
}

module.exports = AgedBrie;
