let n = 5;


for (let i = 1; i <= n; i++) {
    let row = "";

    
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    row += "*";

  
    if (i > 1) {
        for (let m = 1; m <= 2 * i - 3; m++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}


for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

   
    row += "*";

   
    if (i > 1) {
        for (let m = 1; m <= 2 * i - 3; m++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}
