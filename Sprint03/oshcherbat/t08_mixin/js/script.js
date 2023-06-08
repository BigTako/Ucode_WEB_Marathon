import HouseBuilder from "./houseBuilder.js";
  
let houseMixin = {
    
    wordReplace(wrd, awrd){
        this.description = this.description.replace(wrd, awrd);
    },

    wordInsertAfter(wrd, awrd){
        this.description = this.description.replace(wrd, wrd + " " + awrd);        
    },

    wordDelete(wrd){
        this.description = this.description.replace(wrd + " ", "").replace(" " + wrd, "");
    },

    wordEncrypt(){
        var encryptedText = "";
        for (var i = 0; i < this.description.length; i++) {
            var char = this.description.charCodeAt(i);
        
            if (char >= 65 && char <= 90) {
              // Uppercase letters (A-Z)
              encryptedText += String.fromCharCode(((char - 65 + 13) % 26) + 65);
            } else if (char >= 97 && char <= 122) {
              // Lowercase letters (a-z)
              encryptedText += String.fromCharCode(((char - 97 + 13) % 26) + 97);
            } else {
              // Non-alphabetic characters remain unchanged
              encryptedText += this.description.charAt(i);
            }
        }
        this.description = encryptedText;
    },

    wordDecrypt(){
        var decryptedText = "";

        for (var i = 0; i < this.description.length; i++) {
            var char = this.description.charCodeAt(i);

            if (char >= 65 && char <= 90) {
            // Uppercase letters (A-Z)
            decryptedText += String.fromCharCode(((char - 65 + 13) % 26) + 65);
            } else if (char >= 97 && char <= 122) {
            // Lowercase letters (a-z)
            decryptedText += String.fromCharCode(((char - 97 + 13) % 26) + 97);
            } else {
            // Non-alphabetic characters remain unchanged
            decryptedText += this.description.charAt(i);
            }
        }
        this.description = decryptedText;
    }
  }

//   const house= new HouseBuilder('88 Crescent Avenue','Spacious town house with wood flooring, 2-car garage, and a back patio.','J. Smith', 110, 5);
//   Object.assign(house, houseMixin);
//   console.log(house.getDaysToBuild()); // 220
//   console.log(house.description); // Spacious town house with wood flooring, 2-car garage, and a back patio.
  
//   house.wordReplace("wood", "tile");
//   console.log(house.description);// Spacious town house with tile flooring, 2-car garage, and a back patio.
  
//   house.wordDelete("town ");
//   console.log(house.description);// Spacious house with tile flooring, 2-car garage, and a back patio.
  
//   house.wordInsertAfter("with", "marble");
//   console.log(house.description);// Spacious house with marble tile flooring, 2-car garage, and a back patio.
  
//   house.wordEncrypt();
//   console.log(house.description);// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
  
//   house.wordDecrypt();
//   console.log(house.description);// Spacious house with marble tile flooring, 2-car garage, and a back patio.