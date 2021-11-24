const StandardItem = require('./standard_item');

class BackstagePass extends StandardItem {
  update(){
    const days = this.item.sellIn;
    switch(true){
      case (days <= 0):
        this.item.quality = 0;
        break;
      case (days <= 5):
        this.item.quality += 3;
        break;
      case (days <= 10):
        this.item.quality += 2;
        break;
      default:
        this.item.quality += 1;
        break;
    }
    this.quality_cap();
  }
}

module.exports = BackstagePass;