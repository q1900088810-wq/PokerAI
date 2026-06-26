const ranks = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
const suits = ["♠","♥","♦","♣"];

let deck = [];
let selectedSlot = null;

function initDeck(){
    deck = [];
    for (let r of ranks){
        for (let s of suits){
            deck.push(r + s);
        }
    }
}

initDeck();

// 打开牌库
function openDeck(slotId){
    selectedSlot = slotId;

    let panel = document.createElement("div");
    panel.id = "deckPanel";
    panel.style = `
        position:fixed;
        top:0;left:0;
        width:100%;height:100%;
        background:rgba(0,0,0,0.85);
        display:flex;
        flex-wrap:wrap;
        padding:20px;
        gap:8px;
        overflow:auto;
    `;

    deck.forEach(card=>{
        let c = document.createElement("div");
        c.innerHTML = card;
        c.style = `
            width:50px;height:70px;
            background:white;
            color:black;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:6px;
            font-weight:bold;
        `;

        c.onclick = function(){
            pickCard(card);
        };

        panel.appendChild(c);
    });

    document.body.appendChild(panel);
}

// 选牌
function pickCard(card){

    document.getElementById(selectedSlot).innerText = card;

    deck = deck.filter(c => c !== card);

    document.getElementById("deckPanel").remove();
}
