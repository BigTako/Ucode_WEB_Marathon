const litem = document.querySelectorAll("li");

function validateAttributes(element){
    if (!element.hasAttribute('class')) {
        element.setAttribute('class', 'unknown');
    }
    else{
        const value = element.getAttribute('class');
        if (value != "good" && value != "evil" && value != "unknown"){
            element.setAttribute('class', 'unknown');    
        }
    }

    if (!element.hasAttribute("data-element")){
        element.setAttribute("data-element", "none");
    }

}

litem.forEach((item)=> {
    validateAttributes(item);
    
    item.innerHTML += "<br>";
    const attrsString = item.getAttribute('data-element');
    let circle = NaN;
    if (attrsString == "none"){
        circle = document.createElement('div');
        circle.classList.add("none");
        circle.classList.add("elem");
        item.appendChild(circle);
    }
    else{
        let attrsArr = attrsString.split(" ");
        attrsArr.forEach((attr) => {
            circle = document.createElement('div');    
            circle.classList.add("elem");
            circle.classList.add(attr);
            item.appendChild(circle);
        });
    }
});

let temp = document.getElementsByClassName("none");
for (let index = 0; index < temp.length; index++) {
    let line_div = document.createElement("div");
    line_div.classList.add('line')
    temp[index].appendChild(line_div);
    
}
