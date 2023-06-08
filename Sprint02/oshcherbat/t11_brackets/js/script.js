function checkBrackets(str) {
    if (typeof str !== 'string' || (!str.includes('(') || !str.includes(')'))) {
      return -1;
    }
    let count = 0;
    let brackets = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        count++;
      } else if (str[i] === ')') {
        if (count === 0) {
          brackets++;
        } else {
          count--;
        }
      }
    }
    return count + brackets;
  }

