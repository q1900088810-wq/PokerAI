const ranks = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
const suits = ["♠","♥","♦","♣"];

let deck = [];
let selected = null;

function init(){
    deck = [];

    for(let r of ranks){
        for(let s of suits){
            deck.push(r+s);
        }
    }
}

init();

// 等页面加载完再绑定（关键！！！）
window.onload = function(){

    let slots = ["hero1","hero2","b1","b2","b3","b4","b5"];

    slots.forEach(id=>{
        let el = document.getElementById(id);
        if(el){
            el.onclick = function(){
                openDeck(id);
            }
        }
    });

};

// 打开牌库
function openDeck(id){

    selected = id;

    let panel = document.getElementById("deck");
    panel.innerHTML = "";
    panel.style.display = "flex";

    deck.forEach(card=>{

        let div = document.createElement("div");
        div.className = "deck-card";
        div.innerText = card;

        div.onclick = function(){
            pick(card);
        };

        panel.appendChild(div);
    });
}

// 选牌
function pick(card){

    document.getElementById(selected).innerText = card;

    deck = deck.filter(c => c !== card);

    document.getElementById("deck").style.display = "none";
}
