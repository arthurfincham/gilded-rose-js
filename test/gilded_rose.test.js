const Shop = require("../src/gilded_rose");
const Item = require("../src/item");
const fs = require('fs-extra');
const { exec } = require('child_process');

describe("Gilded Rose", function() {
  
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


