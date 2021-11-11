const paper = document.querySelector('.Grid');
const board = document.querySelector('.Container');
const eraser = document.querySelector('#Eraser');
const editgrid = document.querySelector('#EditGrid');
const EraseCompletely = document.querySelector('#Reset');
const msg = document.querySelector('.msg');
let erasetracker = 1;
let gridsize = 16;
let limit = 20;
let chosencolor = "#000000";
function GenerateGridBlocks(squares){
    let NumOfSquares = squares * squares;
    for (let i = 0; i < NumOfSquares; i++){
        let squareblock = document.createElement('div');
        squareblock.classList.add("item");
        squareblock.addEventListener('mouseover',function (){
            squareblock.style.backgroundColor = chosencolor;
        });
        board.appendChild(squareblock);
        squareblock.style.width = `${582 / NumOfSquares}px`;
        squareblock.style.height = `${198 / NumOfSquares}px`;
    }
    paper.appendChild(board);
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
        msg.innerText = "ERASER MODE: ON"; 
    }
    else{
        chosencolor = "#000000";
        msg.innerText = "ARTISTIC MODE: ON";
    }
});
EraseCompletely.addEventListener('click',function(){
    ResetGrid(board);
    GenerateGridBlocks(gridsize);
});
editgrid.addEventListener('click',function(){
gridsize= prompt("Enter the grid size. Limit is " + limit);
while (gridsize <= 1 || gridsize > limit)
gridsize = prompt("Enter a valid value. Limit is " + limit);
ResetGrid(board);
GenerateGridBlocks(gridsize);
});
GenerateGridBlocks(gridsize);