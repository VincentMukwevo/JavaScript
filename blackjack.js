
function error1(num = 0){

    if ( num ===0) alert("Start the game by clicking the 'Hit' or 'Stay' button.");
   if ( num ===1) alert("Busted! Dealer wins.");
   if ( num ===2) alert("Blackjack! Player wins.");

};


function hit(){
    console.log("Hit button clicked");
    let cards1 = document.getElementById("player-cards");
    let cards2 = document.getElementById("dealer-cards");

    if (cards1.textContent === "__        __         __        __") {
        cards1.textContent = "10        09        __        __";
    }

    else if (cards1.textContent === "10        09        __        __") {   
    cards1.textContent = "10        09        05        __";
    cards2.textContent = "08         10       02        __";
    error1(1);
    }

}

function stay(){
    console.log("Stay button clicked");
    let cards1 = document.getElementById("player-cards");
    let cards2 = document.getElementById("dealer-cards");  

    if (cards1.textContent === "10        09        __        __") {
        cards2.textContent = "08         10       02        __";
        error1(2);
        return;
    }
    error1(0);

}

function restartGame() {
    console.log("Restart button clicked");
    alert("Game restarted! Click 'Hit' or 'Stay' to play again.");
    let cards1 = document.getElementById("player-cards");
    let cards2 = document.getElementById("dealer-cards");
    cards1.textContent = "__        __         __        __";
    cards2.textContent = "08         10       __         __";
    document.getElementById("result-text").textContent = "";
}

