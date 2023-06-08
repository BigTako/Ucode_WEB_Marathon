document.getElementById("placeholder").remove();
document.getElementById("notification").remove();
document.querySelector("h1").remove();

let superHeroes = [
  { name: "Black Panther", strength: 66, age: 53 },
  { name: "Captain America", strength: 79, age: 137 },
  { name: "Captain Marvel", strength: 97, age: 26 },
  { name: "Hulk", strength: 80, age: 49 },
  { name: "Iron Man", strength: 88, age: 48 },
  { name: "Spider Man", strength: 78, age: 16 },
  { name: "Thanos", strength: 99, age: 1000 },
  { name: "Thor", strength: 95, age: 1000 },
  { name: "Yon Rogg", strength: 73, age: 52 },
];

const mainContainer = document.querySelector("main");
let mainTable = NaN;
let curTableBody = NaN;

mainContainer.innerHTML += `<div id="title-container">
                                <h1>Sort table</h1>
                                <div id="status-display">Not sorted</div>
                            </div>`;

const statusDisplay = document.getElementById("status-display");

function addSuperheroInfo(tableBody, data) {
  tableBody.innerHTML += `<tr>
                                <td>${data.name}</td>
                                <td>${data.strength}</td>
                                <td>${data.age}</td>
                            </tr>`;
}

function sortByStrength(arr, order) {
  return arr.sort((a, b) => order * (a.strength - b.strength));
}

function sortByAge(arr, order) {
  return arr.sort((a, b) => order * (a.age - b.age));
}

function sortByName(arr, order) {
  return arr.sort((a, b) => {
    return order * a.name.localeCompare(b.name);
  });
}

function fillTable(data) {
  if (curTableBody) {
    mainTable.removeChild(curTableBody);
  }

  curTableBody = document.createElement("tbody");

  data.forEach((hero) => {
    addSuperheroInfo(curTableBody, hero);
  });
  mainTable.appendChild(curTableBody);
}

function createTable(data) {
  mainTable = document.createElement("table");

  mainTable.innerHTML +=
    '<thead>\
                                <tr>\
                                    <th id="hero-name-header">Name</th>\
                                    <th id="hero-strength-header">Strength</th>\
                                    <th id="hero-age-header">Age</th>\
                                </tr>\
                            </thead>';

  fillTable(data);

  mainContainer.appendChild(mainTable);
}

createTable(superHeroes);

const nameHeader = document.getElementById("hero-name-header");
const strengthHeader = document.getElementById("hero-strength-header");
const ageHeader = document.getElementById("hero-age-header");

let sorting = {
  byName: 1,
  byStrength: 1,
  byAge: 1,
};

nameHeader.addEventListener("click", function () {
  if (sorting.byName > 0) {
    statusDisplay.textContent = `Sorting by Name, order: DESC`;
    sorting.byName -= 2;
  } else {
    statusDisplay.textContent = `Sorting by Name, order: ASC`;
    sorting.byName += 2;
  }
  fillTable(sortByName(superHeroes, sorting.byName));
});

strengthHeader.addEventListener("click", function () {
  if (sorting.byStrength > 0) {
    statusDisplay.textContent = `Sorting by Strength, order: DESC`;
    sorting.byStrength -= 2;
  } else {
    statusDisplay.textContent = `Sorting by Strength, order: ASC`;
    sorting.byStrength += 2;
  }
  fillTable(sortByStrength(superHeroes, sorting.byStrength));
});

ageHeader.addEventListener("click", function () {
  if (sorting.byAge > 0) {
    statusDisplay.textContent = `Sorting by Age, order: DESC`;
    sorting.byAge -= 2;
    } else {
        statusDisplay.textContent = `Sorting by Age, order: ASC`;
        sorting.byAge += 2;
    }
    fillTable(sortByAge(superHeroes, sorting.byAge));
});
