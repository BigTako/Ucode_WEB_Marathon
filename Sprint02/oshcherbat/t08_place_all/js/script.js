function sort(array) {
    // Sort odd and even numbers separately
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j + 1] % 2 === 0 && array[j] % 2 !== 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    // Count the number of even elements in the array
    let cntr = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            cntr++;
        }
    }

    // Sort the even numbers in ascending order
    for (let i = 0; i < cntr - 1; i++) {
        for (let j = 0; j < cntr - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    // Sort the odd numbers in ascending order
    for (let i = cntr; i < array.length; i++) {
        for (let j = cntr; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

// let arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// sort(arr);
// console.log(arr);

// arr = [11, 7, 9, 11, 3, 29];
// sort(arr);
// console.log(arr);

// arr = [28, 24, 22, 2, 4];
// sort(arr);
// console.log(arr);
