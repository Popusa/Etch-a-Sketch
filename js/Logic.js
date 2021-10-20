const paper = document.querySelector('Grid');
function GenerateGridBlocks(squares){
    for (let i = 0; i < squares; i++){
        let squareblock = document.createElement('div');
        paper.appendChild(squareblock);
        squareblock.addEventListener('mouseover',ApplyColor(squareblock));
    }
}
function ApplyColor(square){
    square.style.backgroundColor = black;
}
GenerateGridBlocks(16);