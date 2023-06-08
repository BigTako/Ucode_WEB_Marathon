let animal = prompt('What animal is the superhero most similar to?', 'Zebra');

if (!/^[A-Za-z]+$/.test(animal) || animal.length > 20) {
    alert("");
} 
else {
    var superhero = animal;

    animal = prompt('Is the superhero male or female? Leave blank if unknown or other.', 'male');
    if (!/^male$/i.test(animal) && !/^female$/i.test(animal) && animal.length !== 0) {
        alert("Invalid input.");
    }
    else {
        var gender = animal;
        animal = prompt('How old is the superhero?', '19');
        if (!/^[0-9]+$/.test(animal) || animal.length > 5 || animal[0] === '0') {
            alert("Invalid input.");
        }
        else {
            var age = new Number(animal);

            var heading = document.querySelector('h1');
            heading.textContent;

            if (/^male$/i.test(gender) && age < 18) {
                heading.textContent = `The superhero name is: ${superhero}-boy!`;
            } 
            else if (/^male$/i.test(gender) && age >= 18) {
                heading.textContent = `The superhero name is: ${superhero}-man!`;
            } 
            else if (/^female$/i.test(gender) && age < 18) {
                heading.textContent = `The superhero name is: ${superhero}-girl!`;
            } 
            else if (/^female$/i.test(gender) && age >= 18) {
                heading.textContent = `The superhero name is: ${superhero}-woman!`;
            }
            else if (age < 18) {
                heading.textContent = `The superhero name is: ${superhero}-kid!`;
            }
            else {
                heading.textContent = `The superhero name is: ${superhero}-hero!`;
            }
        }
    }
}