var boardLength = 9;

//board is stored as a 9x9 array of numbers; 0 denotes blank
var board = [[0,0,5,6,0,0,9,4,3],[3,0,0,0,4,0,0,0,0],[0,4,0,0,0,0,7,0,6],[0,7,0,0,9,4,0,0,0],[6,0,2,0,0,0,4,0,5],[0,0,0,2,6,0,0,3,0],[1,0,3,0,0,0,0,7,0],[0,0,0,0,5,0,0,0,9],[8,9,4,0,0,7,6,0,0]];

var printBoard = function(board){
	//prints out the input array
    for (i=0;i<board.length;i++){
        console.log(board[i]);
        }
}

var index2point = function(row, col){
	//given row and column returns dict of obvious form
	return {"row": row, "col": col}
}

var getBox = function(row, col){
//returns the indices for a given 3x3 box (needs row and column inputs from 0:2)
	var rowIndices = new Array;
	var colIndices = new Array;
	var indices = new Array;
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			point = {"row": 3*row+i, "col": 3*col+j}
			indices.push(point);
			rowIndices.push(3*row+i);
			colIndices.push(3*col+j);
		}
	}		
	var toReturn = [rowIndices, colIndices];
	return toReturn;
}

var getRow = function(row){
//returns the indices for a given row (needs row input)
	var rowIndices = new Array;
	var colIndices = new Array;
	for(j = 0; j < 9; j++){
		rowIndices.push(row);
		colIndices.push(j);
	}		
	var toReturn = [rowIndices, colIndices];
	return toReturn;
}

var getCol = function(col){
//returns the indices for a given col
	var rowIndices = new Array;
	var colIndices = new Array;
	for(i = 0; i < 9; i++){
		rowIndices.push(i);
		colIndices.push(col);
	}		
	var toReturn = [rowIndices, colIndices];
	return toReturn;
}

var positionToBox = function(row, col){
	//converts row and column position to the box it is in
	

var isMoveValid = function(row,col,input){
	//given a row and column and new number being added there
	//checks whether the input is a legal move
	sameRow = getRow(row)
	sameCol
}
printBoard(getBox(0,1));
printBoard(getCol(3));
printBoard(getRow(3));
