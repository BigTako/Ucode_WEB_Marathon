const validator = {
    get(obj, prop) {
        console.log(`Trying to access the property '${prop}'...`);
        // An extra property
        if (prop === "age" || prop === "gender") {
            return obj[prop]; 
        }else{
            return false;
        }
    },

    set(obj, prop, value) {
        console.log(`Setting value '${value}' to '${prop}'`);
        if (prop === "age") {
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not an integer");
            }
            if (value < 0 || value > 200) {
                throw new RangeError("The age is invalid");
            }
        }
        // The default behavior to store the value
        obj[prop] = value;
        // Indicate success
        return true;
    },

  };

// let person = new Proxy({}, validator);

// person.age = 100;
// // Setting value '100' to 'age'
// console.log(person.age);
// // Trying to access the property 'age'...
// // 100
// person.gender = "male";
// // Setting value 'male' to 'gender'
// person.age = 'young';
// // Uncaught TypeError: The age is not an integer
// person.age = 300;
// // Uncaught RangeError: The age is invalid