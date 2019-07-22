const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} operation on ${itemName}`);
  inventoryAction(itemName);
};

invokeInventoryOperation("Аптечка", inventory.add.bind(inventory));
// Invoking add operation on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation("Фильтр", inventory.remove.bind(inventory));
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка'])