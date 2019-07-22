 class Storage {
    constructor(arr) {
        this.items = arr;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        for(const el of this.items) {
            if(item === el) {
                this.items.splice(this.items.indexOf(el), 1)
            }
        }
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]