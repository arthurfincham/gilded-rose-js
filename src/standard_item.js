class StandardItem {
  constructor(item) {
    this.item = item;
  }
  update() {
    if (this.item.sellIn <= 0) {
      this.item.quality -= 2;
    } else {
      this.item.quality -= 1;
    }
    this.item.sellIn -= 1;
  }
  quality_cap() {
    if (this.item.quality < 0) {
      this.item.quality = 0;
    }
    if (this.item.quality > 50) {
      this.item.quality = 50;
    }
  }
}

module.exports = StandardItem;
