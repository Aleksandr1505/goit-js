const checkForSpam = function(string) {
    const words = string.split(' ');
  console.log('words :', words);
    for (const word of words) {
      if(string.toLowerCase().includes('spam') || string.toLowerCase().includes('sale')) {
        return true;
      } 
    };
    
    return  false;
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true