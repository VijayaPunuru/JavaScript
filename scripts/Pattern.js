function printPattern() {
    for (let i = 5; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '+';
        }
        for (let k = 1; k <= 5 - i; k++) {
            pattern += '-';
        }
        console.log(pattern);
    }
}
printPattern();
