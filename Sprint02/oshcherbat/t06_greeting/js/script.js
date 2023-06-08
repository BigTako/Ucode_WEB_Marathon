let firstName = prompt("First name:");
let lastName = prompt("Last name:");
let error = 0;

for (let index = 0; index < firstName.length; index++) {
    if (!isNaN(firstName[index])) {
        error = 1;
        break;
    }
}

for (let index = 0; index < lastName.length; index++) {
    if (!isNaN(lastName[index])) {
        error = 1;
        break;
    }
}

if (error === 0) {
    let result = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + 
    " " + 
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    
    alert(result);
} 
else {
    alert("Wrong input!");
    console.log("Wrong input!");
}