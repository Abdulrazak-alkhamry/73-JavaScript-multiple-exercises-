/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const performOperation = operation => {
        let Input1 =  Number(document.getElementById("op-one").value);
        let Input2 =  Number(document.getElementById("op-two").value);
        
        switch (operation) {
            case "addition":
                alert(Input1 + Input2);
                break;
            case "substraction":
                alert(Input1 - Input2);
                break;
            case "multiplication":
                alert(Input1 * Input2);
                break;
            case "division":
                alert(Input1 / Input2);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();