function total(count, price, total = 0){
    return count*price + total;
}

// let sum = total(1, 0.1);
// sum = total(1, 0.2, sum);
// sum = total(1, 0.78, sum);
// console.log(sum); // will return 1.08

// sum = total(3, 0.3);
// sum = total(4, 1.46, sum);
// sum = total(8, 0.5, sum)
// console.log(sum);