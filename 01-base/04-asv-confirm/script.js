/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function questions() {

    // your code here
    let name = prompt("What is your name ? :");
    let age = parseInt(prompt("How old are you ?"));
    let gender = prompt("What is your gender?");
    let city = prompt("In which city do you live?");

    let answer = confirm("Hello "+ name +" You are a " + age + " year old " + gender + " from " + city + ". Is that correct ?");
        if (answer == true) {
            alert("Thanks for the information");
        }
        else{
            questions();
        }

})();