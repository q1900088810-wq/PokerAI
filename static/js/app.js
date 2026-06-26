const ranks = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
const suits = ["♠","♥","♦","♣"];

let deck = [];

for (let r of ranks){
    for (let s of suits){
        deck.push(r + s);
    }
}

// 👇 强制测试
window.onload = function(){
    document.getElementById("hero1").innerHTML = deck[0];
};
