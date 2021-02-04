/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let d = new Date();
    let n = d.toDateString(); // to convert the date (not the time) of a Date object into a readable string
    let hours = d.getHours();
    let minute = d.getMinutes();
    let seconds = d.getSeconds();
    let hm = hours + "h " + minute + "m " + seconds + "s" ;

    document.getElementById("target").innerHTML ="Today is " + n + " and time is : " + hm;

   
})();