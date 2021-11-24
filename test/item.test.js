const Item = require('../src/item')

describe('Item', () => {
  const item = new Item("Cake",5,5)
  it('has a name', () => {
    expect(item.name).toEqual('Cake')
  })
});