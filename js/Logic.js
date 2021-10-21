const paper = document.getElementById('Grid');
const eraser = document.getElementById('Eraser');
let erasetracker = 1;
let chosencolor = "#000000";
function GenerateGridBlocks(squares){
    for (let i = 0; i < squares; i++){
        let squareblock = document.createElement('div');
        paper.appendChild(squareblock);
        squareblock.addEventListener('mouseover',ApplyColor(squareblock));
    }
}
eraser.addEventListener('click',function(){
    erasetracker++;
//    console.log(erasetracker);
    if (erasetracker % 2 == 0){
        chosencolor = "#FFFFFF";
//    console.log("ERASER MODE: ON");
    }
});
function ApplyColor(square){
    square.style.backgroundColor = chosencolor;
}
GenerateGridBlocks(16);