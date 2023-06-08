String.prototype.removeDuplicates = function(){
    const words = this.trim().split(/\s+/);
    const uniqueWords = [];
    
    for (let i = 0; i < words.length; i++) {
        if (!uniqueWords.includes(words[i])) {
        uniqueWords.push(words[i]);
        }
    }
    
    return uniqueWords.join(" ");
}

// let str = "Giant Spiders?   What`s next? Giant Snakes?";
// console.log(str); // Giant Spiders?   What’s next? Giant Snakes?

// str= str.removeDuplicates();
// console.log(str); // Giant Spiders? What’s next? Snakes?

// str= str.removeDuplicates();
// console.log(str); // Giant Spiders? What’s next? Snakes?

// str = ". . . . ? . . . . . . . . . . . ";
// console.log(str); // . . . . ? . . . . . . . . . . .
// str= str.removeDuplicates(); 
// console.log(str);// . ?