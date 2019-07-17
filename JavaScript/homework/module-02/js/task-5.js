const formatString = function(string) {
    const words = string.split(' ');

    for (const word of words) {
      if(string.length <= 40) {
        return string;
        } else if (string.length > 40)  {
            return  string.slice(0, 40) + "...";
        }
    };   
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка

