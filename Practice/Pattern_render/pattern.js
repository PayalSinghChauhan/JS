var i, j;
function pattern(pattern) {
    for (i = pattern; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            console.log("*".repeat(i));
        }
    }
}
pattern(5);


function pat(pat) {
    for (i = 1; i <= pat; i++) {
        for (j = 1; j <= i; j++) {
            console.log("*".repeat(i));
        }
    }
}
pat(5);