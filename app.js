/* Stampo i numeri da 1 a 100 usando un loop.*/

for (let index = 0; index <= 100; index++) {
    /*  Per diversificare l'output
    uso un condizionale qui dentro al loop.
   */

    if (index % 5 == 0 && index % 3 == 0) {
        /* se è multiplo di TRE E CINQUE */
        console.log("FIZZBUZZ");
    } else if (index % 5 == 0) {
        /*  se è multiplo di CINQUE */
        console.log("BUZZ");
    } else if (index % 3 == 0) {
        /* se è multiplo di TRE */
        console.log("FIZZ");
    } else {
        console.log(index);
    }
}
