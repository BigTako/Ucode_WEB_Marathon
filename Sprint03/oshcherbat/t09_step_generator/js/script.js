function* generator() {
    let total = 1;
    while (true) {
      const increment = yield total;
      total += increment;
    }
  }
  
  const gen = generator();
  
  let prevVal = gen.next().value; // output 1
  let num;
  while(true){
    num = Number.parseInt(prompt(`Previous result: ${prevVal}. Enter a new number:`));
    if (!isNaN(num)){
        if (num === 0){
            break;
        }
        prevVal = gen.next(num).value;
        if (prevVal > 10000){
            prevVal = gen.next(-prevVal + 1).value;
        }
    }
    else{
        console.error("Invalid number!");
    }
  }

  