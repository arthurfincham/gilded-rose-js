const {Shop, Item} = require("../src/gilded_rose");
const fs = require('fs-extra');
const { exec } = require('child_process');

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  
  it("should equal the Gold Standard", async(done) => {
    const script = `node test/texttest_fixture.js 11 > test/test.txt `;
    await exec(script, () => {
      const gold_standard = fs.readFileSync('./test/gold_standard.txt');
      const test_text = fs.readFileSync('./test/test.txt');
      expect(test_text).toEqual(gold_standard);
      done();
    })
  })
});


