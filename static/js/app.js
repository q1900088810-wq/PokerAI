const ranks = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
const suits = ["♠","♥","♦","♣"];

let deck = [];
let selectedSlot = null;

// 生成52张牌
function initDeck(){
    deck = [];
    for (let r of ranks){
        for (let s of suits){
            deck.push(r + s);
        }
    }
}

initDeck();

// 点击牌位
function selectSlot(slotId){
    selectedSlot = slotId;
    showDeck();
}

// 显示牌库（弹层）
function showDeck(){

    let html = "<div id='deckPanel' style='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;flex-wrap:wrap;align-content:flex-start;padding:20px;gap:10px;'>";

    for (let card of deck){
        html += `<div onclick="pickCard('${card}')" 
        style="width:50px;height:70px;background:white;color:black;display:flex;align-items:center;justify-content:center;border-radius:6px;font-weight:bold;">
        ${card}
        </div>`;
    }

    html += "</div>";

    document.body.innerHTML += html;
}

// 选择牌
function pickCard(card){

    document.getElementById(selectedSlot).innerHTML = card;

    // 从牌库移除
    deck = deck.filter(c => c !== card);

    document.getElementById("deckPanel").remove();
}
