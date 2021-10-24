const paper = document.querySelector('.Grid');
const board = document.createElement('div');
const eraser = document.querySelector('#Eraser');
let erasetracker = 1;
let chosencolor = "#000000";
function GenerateGridBlocks(squares){
    let NumOfSquares = squares * squares;
    for (let i = 0; i < NumOfSquares; i++){
        let squareblock = document.createElement('div');
        squareblock.classList.add("grid");
        board.appendChild(squareblock);
        squareblock.addEventListener('mouseover',ApplyColor(squareblock));
    }
}
eraser.addEventListener('click',function(){
    erasetracker++;
    console.log(erasetracker);
    if (erasetracker % 2 == 0){
        chosencolor = "#FFFFFF";
        console.log("ERASER MODE: ON");
    }
    else{
        chosencolor = "#FFFFFF";
        console.log("ERASER MODE: OFF");
    }
});
function ApplyColor(square){
    square.style.backgroundColor = chosencolor;
}
GenerateGridBlocks(16);
paper.appendChild(board);