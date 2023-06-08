const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");

const inputField = document.getElementById("text-input");
const outputField = document.getElementById("text-output");



  function padNumber(num) {
    return num.toString().padStart(2, "0");
  }

  function setStorageItem(value){
    var currentDate = new Date();

    // Get the current date
    var date = currentDate.getDate();

    // Get the current month (Note: January is 0)
    var month = currentDate.getMonth() + 1;

    // Get the current year (2-digit format)
    var year = currentDate.getFullYear().toString().slice(-2);

    // Get the current hours
    var h = currentDate.getHours();

    // Get the current minutes
    var m = currentDate.getMinutes();

    // Get the current seconds
    var s = currentDate.getSeconds();

    // Format the date and time
    var formattedDate = padNumber(date) + "." + padNumber(month) + "." + padNumber(year);
    var formattedTime = padNumber(h) + "." + padNumber(m) + "." + padNumber(s);

    let dateTime = ` [${formattedDate}  ${formattedTime}]`;
    localStorage.setItem("data", localStorage.getItem("data") + "\n" + value + dateTime);
  }

  function clearCookies() {
    if (confirm("Are you sure?")){
        localStorage.clear();
        outputField.textContent = "[Empty]";
    }
  }

  function renewOutput(){
    outputField.innerHTML = "";
    let data = localStorage.getItem("data").split("\n");
    data.forEach((i) => {
        if (i != "null" && i.length > 0){
            let newbr = document.createElement("p");
            newbr.innerHTML = "--> " + i;
            outputField.appendChild(newbr);
        }
    });
  }
  
addButton.addEventListener('click', function(){
    let curInput = inputField.value;
    
    if (curInput.length === 0){
        alert("It's empty. Try to input something in \"Text input\"");
    }
    else{
      setStorageItem(curInput);
    }
    renewOutput();
});

clearButton.addEventListener('click', function(){
    clearCookies(); 
});