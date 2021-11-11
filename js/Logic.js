const paper = document.querySelector('.Grid');
const board = document.querySelector('.Container');
const eraser = document.querySelector('#Eraser');
const editgrid = document.querySelector('#EditGrid');
const msg = document.querySelector('.msg');
let erasetracker = 1;
let gridsize = 16;
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
editgrid.addEventListener('click',function(){
let newgridsize = prompt("Enter the grid size. Limit is 16");
while (newgridsize <= 1 || newgridsize > 32)
    newgridsize = prompt("Enter a valid value. Limit is 16");
ResetGrid(board);
GenerateGridBlocks(newgridsize);
});
GenerateGridBlocks(gridsize);