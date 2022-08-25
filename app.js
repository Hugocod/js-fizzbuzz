/* prendo il container in cui iniettare gli elementi */
let container = document.getElementById("container");

/* Stampo i numeri da 1 a 100 usando un loop.*/

for (let index = 1; index <= 100; index++) {
    /*  Per diversificare l'output uso un condizionale qui dentro al loop. */
    if (index % 5 == 0 && index % 3 == 0) {
        /* se è multiplo di TRE E CINQUE */
        console.log("FIZZBUZZ");
        let div = document.createElement("div");
        div.style.backgroundColor = "#DC6ACF";
        div.append("FIZZBUZZ");
        container.append(div);
    } else if (index % 5 == 0) {
        /*  se è multiplo di CINQUE */
        console.log("BUZZ");
        let div = document.createElement("div");
        div.style.backgroundColor = "#ACF39D";
        div.append("BUZZ");
        container.append(div);
    } else if (index % 3 == 0) {
        /* se è multiplo di TRE */
        console.log("FIZZ");
        let div = document.createElement("div");
        div.style.backgroundColor = "#E85F5C";
        div.append("FIZZ");
        container.append(div);
    } else {
        /* se non è multiplo di TRE o di CINQUE */
        console.log(index);
        let div = document.createElement("div");
        div.style.backgroundColor = "#C4BBB8";
        div.append(index);
        container.append(div);
    }
}
