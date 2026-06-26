
const ranks = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
const suits = ["♠","♥","♦","♣"];

let deck = [];
let selectedSlot = null;

function initDeck(){
    deck = [];
    for(let r of ranks){
        for(let s of suits){
            deck.push(r + s);
        }
    }
}

initDeck();

// 打开牌库
function openDeck(slotId){

    selectedSlot = slotId;

    let old = document.getElementById("deckPanel");
    if(old) old.remove();

    let panel = document.createElement("div");
    panel.id = "deckPanel";

    deck.forEach(card => {

        let div = document.createElement("div");
        div.className = "deck-card";
        div.innerText = card;

        div.onclick = function(){
            selectCard(card);
        };

        panel.appendChild(div);
    });

    document.body.appendChild(panel);
}

// 选择牌
function selectCard(card){

    if(!selectedSlot) return;

    document.getElementById(selectedSlot).innerText = card;

    deck = deck.filter(c => c !== card);

    document.getElementById("deckPanel").remove();

}
