class Human{
    
    constructor(fname, lname, gender, age, calories){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.calories = calories;
        this.#startCaloriesDecreasing();
    }
    #startCaloriesDecreasing(){
        var self = this;
        this.lifeIntervalId = setInterval(function() {
            if (self.calories > 0) {
                self.calories--;
                caloriesDisplay.textContent = `Calories: ${self.calories}`;
            } else {
                caloriesDisplay.textContent = `Calories: ${self.calories}`;
                statusDisplay.textContent = "I'm hungry!";
                clearInterval(this.lifeIntervalId);
            }
        }, 300);
    }
    
    stopCaloriesDecreasing(){
        clearInterval(this.lifeIntervalId);
    }

    feed(){
        if (this.calories > 500){
            statusDisplay.textContent = "I'm not hungry";
        }
        else{
            
            statusDisplay.textContent = "Nom nom nom";
            
            //clearInterval(this.lifeIntervalId);
            feedButton.disabled = true;
            turnIntoSuperhero.disabled=true;
            var self = this;
            setTimeout(function() {
                self.calories += 200;
                if (self.calories < 500){
                    statusDisplay.textContent = "I'm still hungry";
                }else{
                    statusDisplay.textContent = "Living...";    
                }
                feedButton.disabled = false;    
                turnIntoSuperhero.disabled = false;
            }, 10000);
        }
    }

    sleepFor(){
        let secs = prompt("How many seconds to sleep?").valueOf() - 0;
        sleepButton.disabled = true;
        feedButton.disabled = true;
        turnIntoSuperhero.disabled=true;
            
        if (!isNaN(secs)){
            statusDisplay.textContent = "I`m sleeping";
            setTimeout(function() {
                statusDisplay.textContent = "I`m awake now";
                sleepButton.disabled = false;
                feedButton.disabled = false;
                turnIntoSuperhero.disabled=false;
            }, secs*1000);
        }
    }
}

class Superhero extends Human{
    constructor(fname, lname, gender, age, calories){
        super(fname, lname, gender, age, calories);
        this.stopCaloriesDecreasing();
    }

    fly(){
        sleepButton.disabled = true;
        statusDisplay.textContent = "I`m flying!";
        setTimeout(function() {
            statusDisplay.textContent = "I am Iron Man!";
            sleepButton.disabled = false;
        }, 10000);
    }

    fightWithEvil(){

        statusDisplay.textContent = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
    }
}

let tony = new Human("Tony", "Stark", "male", 45, 17);

const feedButton = document.getElementById("feedButton");
const sleepButton = document.getElementById("sleepButton");
const turnIntoSuperhero = document.getElementById("transformButton");

const caloriesDisplay = document.getElementById("caloriesDisplay");
const statusDisplay = document.getElementById("status");
const fnameDisplay = document.getElementById("fname");
const lnameDisplay = document.getElementById("lname");

const avatar = document.getElementById("heroImg");

let feedTony = () => {tony.feed()};
let makeTonySleepy = () => {tony.sleepFor()};

feedButton.addEventListener('click', feedTony);
sleepButton.addEventListener('click', makeTonySleepy);

turnIntoSuperhero.addEventListener('click', function(){
    if (tony.calories > 500)
    {
        tony.stopCaloriesDecreasing();

        avatar.setAttribute("src","https://imgix.bustle.com/uploads/image/2022/9/21/ced59205-80d9-47ee-81fd-2c44c520e440-iron-man-featured.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg")
        fnameDisplay.textContent = "Iron";
        lnameDisplay.textContent = "Man";

        feedButton.textContent = "Fly";
        sleepButton.textContent = "FightWithEvil";
        caloriesDisplay.textContent = "infinity";

        feedButton.removeEventListener('click', feedTony);
        sleepButton.removeEventListener('click', makeTonySleepy);
        
        let Iron_Man = new Superhero(tony.fname, tony.lname, tony.gender, tony.age, tony.calories);

        feedButton.se
        feedButton.addEventListener('click', () => {Iron_Man.fly()});
        sleepButton.addEventListener('click', () => {Iron_Man.fightWithEvil()});
    }
});
