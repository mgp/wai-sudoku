var b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var boardLength = 9;

var board = [[0,0,5,6,0,0,9,4,3],[3,0,0,0,4,0,0,0,0],[0,4,0,0,0,0,7,0,6],[0,7,0,0,9,4,0,0,0],[6,0,2,0,0,0,4,0,5],[0,0,0,2,6,0,0,3,0],[1,0,3,0,0,0,0,7,0],[0,0,0,0,5,0,0,0,9],[8,9,4,0,0,7,6,0,0]];

var printBoard = function(board){
    for (i=0;i<board.length;i++){
        console.log(board[i]);
        }
}
printBoard(board);
       

var middle = function() {
  alert(b[1][1]);
}
// middle();


var testFcn = function(x,y){

return x+y;

}

console.log('hello')