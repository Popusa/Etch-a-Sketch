const paper = document.querySelector('.Grid');
const board = document.querySelector('.Container');
const eraser = document.querySelector('#Eraser');
const editgrid = document.querySelector('#EditGrid');
let erasetracker = 1;
let gridsize = 4;
let chosencolor = "#000000";
function GenerateGridBlocks(squares){
    let NumOfSquares = squares * squares;
    for (let i = 0; i < NumOfSquares; i++){
        let squareblock = document.createElement('div');
        squareblock.classList.add("item");
        squareblock.addEventListener('mouseover',ApplyColor(squareblock));
        board.appendChild(squareblock);
        squareblock.style.width = `${576 / NumOfSquares}px`;
        squareblock.style.height = `${192 / NumOfSquares}px`;
        squareblock.style.backgroundColor = 'black';
    }
}
function ResetGrid(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
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
editgrid.addEventListener('click',function(){
let newgridsize = prompt("Enter the grid size.");
while (newgridsize <= 1 || newgridsize > 16)
    newgridsize = prompt("Enter a valid value.");
ResetGrid(board);
GenerateGridBlocks(newgridsize);
});
function ApplyColor(squareblock){
    squareblock.style.backgroundColor = chosencolor;
}
GenerateGridBlocks(gridsize);
paper.appendChild(board);