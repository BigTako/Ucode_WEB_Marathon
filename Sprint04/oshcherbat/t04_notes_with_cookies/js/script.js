const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");

const inputField = document.getElementById("text-input");
const outputField = document.getElementById("text-output");

function setCookie(name, value, daysToExpire) {
    let cookieString = name + '=' + encodeURIComponent(value);
  
    if (daysToExpire) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + daysToExpire);
      cookieString += '; expires=' + expirationDate.toUTCString();
    }
  
    document.cookie = cookieString;
  }

  function getCookie(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    
    return null;
  }

  function clearCookies() {
    if (confirm("Are you sure?")){
        setCookie("data", "", 30);
        outputField.textContent = "[Empty]";
    }
  }

  function renewOutput(){
    outputField.innerHTML = "";
    let data = getCookie("data").split("\n");
    data.forEach((i) => {
        if (i.length > 0){
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
        setCookie("data", getCookie("data") + "\n" + curInput, 30);
    }
    renewOutput();
});

clearButton.addEventListener('click', function(){
    clearCookies(); 
});