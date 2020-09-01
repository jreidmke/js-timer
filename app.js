function countdown(x) {
    let int = setInterval(function() {
        if(x > 0) {
            console.log(x);
            x--;
        } else {
            console.log("DONE");
            clearInterval(int);
        }
    }, 1000)
}



function randomGame() {
    let randNum;
    let counter = 0;
    let int = setInterval(function() {
        randNum = Math.random();
        counter++;
        console.log(randNum + " is num");
        console.log(counter + " is counter");
        if(randNum > .75) {
            clearInterval(int);
            console.log(counter + " is how long it took");
        }
    }, 1000)
}