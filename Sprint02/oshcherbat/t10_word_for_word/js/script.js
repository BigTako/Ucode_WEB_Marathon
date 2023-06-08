function temp_finction(obj) {
  let test_double = obj.wrds.split(" ");
  obj.wrds = "";
  for (let index = 0; index < test_double.length; index++) {
    test_double[index] = test_double[index].trim();
    if (test_double[index].length == 0) {
      continue;
    }
    obj.wrds += test_double[index] + " ";
  }
  for (let i = 0; i < test_double.length; i++) {
    for (let j = 0; j < test_double.length; j++) {
      if (i == j) {
        continue;
      }
      if (test_double[i] == test_double[j]) {
        removeWords(obj, test_double[j]);
        obj.wrds = obj.wrds.trim();
        return;
      }
    }
  }
}

function addWords(obj, wrds) {
  wrds = wrds.trim();
  let temp = wrds.split(" ");

  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].trim();
    let index = obj.wrds.indexOf(temp[i]);
    if (index == -1) {
      obj.wrds += " " + temp[i];
    }
  }

  let test_double = obj.wrds.split(" ");
  for (let index = 0; index < test_double.length; index++) {
    temp_finction(obj);
  }

  obj.wrds = obj.wrds.trim();
}

function removeWords(obj, wrds) {
  let temp_wrds = wrds.split(" ");
  for (let p = 0; p < temp_wrds.length; p++) {
    wrds = temp_wrds[p].trim();
    let index = obj.wrds.indexOf(wrds);
    if (index != -1) {
      let result;
      if (index == 0) {
        result = obj.wrds.slice(0, index);
        result += obj.wrds.slice(index + wrds.length);
      } else {
        result = obj.wrds.slice(0, index - 1);
        result += obj.wrds.slice(index + wrds.length);
      }

      obj.wrds = result;
    }
  }
  obj.wrds = obj.wrds.trim();
}

function changeWords(obj, oldWrds, newWrds) {
  oldWrds = oldWrds.trim();
  newWrds = newWrds.trim();
  let ned = oldWrds.split(" ");

  for (let i = 0; i < ned.length; i++) {
    oldWrds = ned[i];
    let index = obj.wrds.indexOf(oldWrds);
    if (index != -1) {
      let result;
      if (index == 0) {
        result = obj.wrds.slice(0, index);
        result += newWrds;
        result += obj.wrds.slice(oldWrds.length);
        obj.wrds = result;
      } else {
        result = obj.wrds.slice(0, index);
        result += newWrds;
        result += obj.wrds.slice(index + 1 + oldWrds.length);
        obj.wrds = result;
      }
    }
  }

  let test_double = obj.wrds.split(" ");
  for (let index = 0; index < test_double.length; index++) {
    temp_finction(obj);
  }
  obj.wrds = obj.wrds.trim();
}


// let obj = {
//     wrds: 'newspapers newspapers books magazines'
// }

//     console.log(obj);
//     // {wrds: "newspapers newspapers books magazines"}
//     addWords(obj, 'radio newspapers ');
//     console.log(obj);
//     // {wrds: "newspapers books magazines radio"}
//     removeWords(obj, 'newspapers radio');
//     console.log(obj);
//     // {wrds: "books magazines"}
//     changeWords(obj, 'books radio magazines', 'tv internet');
//     console.log(obj);

//     // {wrds: "tv internet"}
//     addWords(obj, 'tv internet');
//     console.log(obj);
