const StandardItem = require('./standard_item');

class ConjuredItem extends StandardItem {
  update(){
    this.item.quality -= 2;
    this.item.sellIn -= 1;
    this.quality_cap();
  }
}

module.exports = ConjuredItem;