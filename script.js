function remove() {
    document.querySelector(".inner-contain").remove();
}

function removeAgain(){
    document.querySelector(".inner-contain2").remove();
    console.log("working?");
}

function press1(){
    document.querySelector("#count").innerText++;
}

function press2(){
    document.querySelector("#count").innerText--;
}

function nameChange(){
    document.querySelector("#profile-name").innerText = "Barbra Streisand";
    event.preventDefault();
}