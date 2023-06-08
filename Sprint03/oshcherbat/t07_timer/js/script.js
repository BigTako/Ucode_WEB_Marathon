
function runTimer(id, delay, counter){
    this.title = id;
    this.delay = delay;
    this.stopCount = counter;
    var intervalId;

    this.start = () => {
        console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount})`);
        intervalId = setInterval(this.tick, delay); // Save the interval ID
    }

    this.tick = () => {
        this.stopCount--;
        if (this.stopCount < 0){
            this.stop();
        }else{
            console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
        }
    }

    this.stop = () => {
        clearInterval(intervalId); // Stop the interval using clearInterval()
        console.log(`Timer ${this.title} stopped`);
    }
    this.start();
}

// runTimer("Bleep", 1000, 5);




