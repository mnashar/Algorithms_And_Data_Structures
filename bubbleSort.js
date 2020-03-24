const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(
        "Is " + el1 + " greater than " + el2 + "?: ",
        function (answer) {
            if (answer == "yes") {
                callback(true);
            } else {
                callback(false);
            }
        }
    );
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
   
    if (i == (arr.length - 1)) {
        // End of array reached.
        outerBubbleSortLoop(madeAnySwaps);
        return;
    }

    
}