const calculatePrice = function(string, costPerWord) {
    let total = 0;
    const words = string.split(' ');

    for (const word of words) {
        total += costPerWord;
    }

    return total;
};


console.log(calculatePrice('Lorem ipsum', 10));
console.log(calculatePrice('Lorem ipsum', 20));

console.log(calculatePrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(calculatePrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
console.log(calculatePrice('Donec orci lectus aliquam est', 40)); // 200
console.log(calculatePrice('Donec orci lectus aliquam est', 20)); // 100