
//guestList - WeakSet
let hector = ['Hector'];
let tuco = ["Tuco"];
let gustavo = ["Gustavo"];
let jessey = ["Jessey"];
let hank = ["Hank"];

let guestList = new WeakSet();
guestList.add(hector);
guestList.add(tuco);
guestList.add(gustavo);
guestList.add(jessey);
guestList.add(hank);
guestList.add(hector);

console.log("guestList test: ");
console.log(guestList);
console.log("Hector is in the list? -> " + guestList.has(hector));
guestList.delete(gustavo);
console.log(guestList);
console.log("Size: " + guestList.size);

//menu - WeakMap
const menu = new WeakMap();

// Step 2: Create a separate lookup object
const lookupTable = {};

// Step 3: Add string:int pairs
const key1 = "sandwich";
const key2 = "taco";
const key3 = "burrito";
const key4 = "salsa";
const key5 = "nacho";
const value1 = 10;
const value2 = 20;
const value3 = 30;
const value4 = 40;
const value5 = 50;

lookupTable[key1] = value1;
lookupTable[key2] = value2;
lookupTable[key3] = value3;
lookupTable[key4] = value4;
lookupTable[key5] = value5;

menu.set(lookupTable, true);

// Step 4: Retrieve values using string keys
const getValueByKey = (key) => lookupTable[key];

console.log("Menu test: ");
console.log(key1 + " " + getValueByKey(key1));  // 10
console.log(key2 + " " + getValueByKey(key2));  // 20
console.log(key3 + " " + getValueByKey(key3));  // 20
console.log(key4 + " " + getValueByKey(key4));  // 20
console.log(key5 + " " + getValueByKey(key5));  // 20

console.log("Size: " + menu.size);

//bankVault - Map
const bankVault = new Map();


bankVault.set("Johny:123", 1000);
bankVault.set("Tuco:1235", 2000);
bankVault.set("Gustavo:Frink", 3000);
bankVault.set("John:Doe", 4000);
bankVault.set("Asus:Rog", 5000);

const getBankInfo = (key) => key + " - " + bankVault.get(key);

console.log("bankVault test: ")
console.log(getBankInfo("Johny:123"));  // 10
console.log(getBankInfo("Tuco:1235"));  // 20
console.log(getBankInfo("Gustavo:Frink"));  // 30
console.log(getBankInfo("John:Doe"));  // 40
console.log(getBankInfo("Asus:Rog"));  // 50

console.log("Size: " + bankVault.size);

//coinCollection - Set
const coinCollection = new Set();
coinCollection.add("Bitcoin");
coinCollection.add("Ethereum");
coinCollection.add("Rainbowcoin");
coinCollection.add("AAVE");
coinCollection.add("DOGECoin");
coinCollection.add("DOGECoin");

console.log("coinCollection test: ");
console.log(coinCollection);
console.log("Size: " + coinCollection.size);