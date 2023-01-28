


let games=document.querySelectorAll('.game');
let clear=document.getElementById('clearGame');


const timesClicked={'Fazer' : 0, 'Sneaker':0, 'Raffelo':0}
games.forEach(game => {
    
    game.onclick = () => {
        timesClicked[game.value]+=1;
        game.innerText=timesClicked[game.value];
    }
})
const clearGame =()=>{
    games.forEach(game =>{
        timesClicked[game.value]=0;
        game.innerText=game.value;
    })
}
clear.onclick=()=> clearGame(); 