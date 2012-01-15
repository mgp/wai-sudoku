function isValidArray(array, msg){
	if (Object.prototype.toString.call(array) === '[object Array]') {
		return;
	}
	else{
		alert("Expected an array at function " + msg);
		return;
	}
}

function loadNextBoard(){
	puzzleNumber = (puzzleNumber+1) % boards.length;
	board = boards[puzzleNumber];
	solvedBoard = solvedBoards[puzzleNumber];
	originalBoard = board;
}

function printArray(board){
	//prints out the input array
    for(var i=0;i<board.length;i++){
        //console.log(board[i]);
        }
}

function printBoard(){
	//prints out the input array
    for(var i=0;i<board.length;i++){
        //console.log(board[i]);
        }
}

function point(row, col){
	//given row and column returns dict of obvious form
	this.row = row;
	this.col = col;
}

function printPoints(points){
	isValidArray(points,"printPoints");
	//prints an array of points
	for (var i = 0; i < points.length; i++){
		//console.log([points[i].row,points[i].col]);
	}
}

function getBox(box){
//returns the indices as an array of points for a given 3x3 box
//input: box number
//format:
//012
//345
//678
	var indices = new Array;
	//calculate where box is geometrically from box number
	var colCoord = box % 3;
	var rowCoord = 0;
	if(box < 3){ rowCoord = 0; }
	else if(box < 6){rowCoord = 1; }
	else if(box < 9){rowCoord = 2; }
	
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			var p = new point(3*rowCoord+i,3*colCoord+j);
			indices.push(p);
		}
	}	
	return indices;
}

function getRow(row){
//returns the indices for a given row
	var indices = new Array;
	for(j = 0; j < 9; j++){
			var p = new point(row,j);
			indices.push(p);
	}	
	return indices;
}

function getCol(col){
//returns the indices for a given col
	var indices = new Array;
	for(var i = 0; i < 9; i++){
			var p = new point(i,col);
			indices.push(p);
	}	
	return indices;
}

function point2Box(point){
	var box = 0;
	if(point.row < 3){
		if(point.col < 3){ box = 0; }
		else if(point.col < 6){ box = 1; }
		else if(point.col < 9){ box = 2; }
	}
	
	else if(point.row < 6){
		if(point.col < 3){ box = 3; }
		else if(point.col < 6){ box = 4; }
		else if(point.col < 9){ box = 5; }
	}
	
	else if(point.row < 9){
		if(point.col < 3){ box = 6; }
		else if(point.col < 6){ box = 7; }
		else if(point.col < 9){ box = 8; }
	}
	return box;
}

function point2Row(point){ return point.row; }

function point2Col(point){ return point.col; }

function isMoveValid(row,col,input){
	//given a row and column and new number being added there
	//checks whether the input is a legal move
	sameRow = getRow(row)
	sameCol
}

function find(points, number){
	//maps an array of points "points" to a subset of it consisting of
	//all the points it contains that are that number on the board
	isValidArray(points,"find");
    var subpoints = new Array;
    var count = 0;
    for (var i=0;i<points.length;i++){
		var currentRow = points[i].row;
		var currentCol = points[i].col;
		if (board[currentRow][currentCol] == number){
			subpoints.push(points[i]);      
		}
    }
    return subpoints;
}

function countNum(points, number){
	isValidArray(points,"countNum");
	//returns how many instances of number there is in the array of points
	//"points"
	var myPoints = find(points, number);
	return myPoints.length;
}

function contains(points, number){
	//returns whether number is in the array of points
	//"points"
	isValidArray(points,"contains");
	var numInstances = countNum(points, number);
	if(numInstances > 0){ return true; }
	else { return false; }
}

function sortWIndices(vec, cmp){
	//input: an array of things that can be compared via "<"
	//returns: [the permutation you apply, the sorted vector]
    var data = [];
    for (var i=0;i<vec.length;i++){
        data[i]=[vec[i],i];
    }
    data.sort(cmp);
    var inds = [];
    var vals = [];
    for (var i=0;i<data.length;i++){
        inds[i]=data[i][1];
        vals[i]=data[i][0];
    }
    return [vals,inds];
    //console.log(inds);
    //console.log(vals);
}

function cmp(a,b){
    return a[0]-b[0];
}

function cmpKillZeros(a,b){
	//in some contexts 0 should be 'high' namely a row with no missing entries
	//is not one we want to work on
   if (a[0]==0){
       return 1;
   }
   else if (b[0]==0){
       return -1;
   }
   return a[0]-b[0];
}

function findLeastMissingRows(){
	//outputs the rows ranked in order of least missing
    var counts=[];
    for (var row=0;row<board.length;row++){
        var selection = getRow(row);
        var nMissing = countNum(selection,0);
        counts[row]=nMissing;
    }
    var sorted = sortWIndices(counts, cmpKillZeros);
    var rows = sorted[1];
    var cts = sorted[0];
	return [rows,cts];
}

function findLeastMissingCols(){
	//outputs the rows ranked in order of least missing
    var counts=[];
    for (var j=0;j<board.length;j++){
        var selection = getCol(j);
        var nMissing = countNum(selection,0);
        counts[j]=nMissing;
    }
    var sorted = sortWIndices(counts, cmpKillZeros);
    var cols = sorted[1];
    var cts = sorted[0];
	return [cols,cts];
}

function findLeastMissingBoxes(){
	//outputs the rows ranked in order of least missing
    var counts=[];
    for (var k=0;k<board.length;k++){
        var selection = getBox(k);
        var nMissing = countNum(selection,0);
        counts[k]=nMissing;
    }
    var sorted = sortWIndices(counts, cmpKillZeros);
    var boxes = sorted[1];
    var cts = sorted[0];
	return [boxes,cts];
}

function bestOptions(n){
	//outputs the n-th most filled zone to the console 
	options = findBestOptions();
	//console.log("The best option number ",n, " is",options[0][n-1] , options[1][n-1], "with ", options[2][n-1], "missing");
	return [options[0][n-1],options[1][n-1],options[2][n-1]];
}

function getBoard(){
	//returns the entire board as an array of points
	var points = new Array;
	for(var i = 0; i < board.length; i++){
		for(var j = 0; j < board[0].length; j++){
			var newPoint = new point(i,j);
			points.push(newPoint);
		}
	}
	return points
}

function findBestOptions(){
// FIX: RENAME THE FUNCTION
// outputs [types,inds,cts], each in order from best to words
// types = 'row' / 'col' / 'box'
// inds = 0:8
// cts = how many missing
    var counts = new Array;
    var i=0;
    for (i=0;i<board.length;i++){
        
        // select points in row/col/box
        var pointsRow = getRow(i);
        var pointsCol = getCol(i);
        var pointsBox = getBox(i);
        
        // count the number missing in selection
        var nMissingRow = countNum(pointsRow,0);
        var nMissingCol = countNum(pointsCol,0);
        var nMissingBox = countNum(pointsBox,0);
     
        // push these onto the counts
        counts.push([nMissingRow,'row',i]);
        counts.push([nMissingCol,'col',i]);
        counts.push([nMissingBox,'box',i]);
        
    }
    
    // sort by nMissing
    counts.sort(cmpKillZeros)
    
    var cts   = [];
    var types = [];
    var inds  = [];
    
    for (i=0;i<counts.length;i++){
        cts[i]   = counts[i][0];
        types[i] = counts[i][1];
        inds[i]  = counts[i][2];
    }

    return [types,inds,cts];
}

function bestRowOptions(n){
	//outputs the n-th most filled row to the console 
    options = findLeastMissingRows();
    //console.log("The best option number ",n, " is row " , options[0][n-1], "with ", options[1][n-1], "missing");
    return [options[0][n-1],options[1][n-1]];
}

function bestColOptions(n){
	//outputs the n-th most filled row to the console 
    options = findLeastMissingCols();
    //console.log("The best option number ",n, " is column " , options[0][n-1], "with ", options[1][n-1], "missing");
    return [options[0][n-1],options[1][n-1]];
}

function bestBoxOptions(n){
	//outputs the n-th most filled row to the console 
    options = findLeastMissingBoxes();
    //console.log("The best option number ",n, " is box " , options[0][n-1], "with ", options[1][n-1], "missing");
    return [options[0][n-1],options[1][n-1]];
}

function findMissingNumbers(points){
	//input: a selection of points
	//output: what numbers are not in those points
	isValidArray(points,"findMissingNumbers");
	var i = 0;
	var missingNumbers = [];
	for(i = 1; i < board.length+1; i++){
		if(!contains(points, i)){
			missingNumbers.push(i);
		}
	}
	return missingNumbers;
}

function getRows(points){
	//input: selection
	//output: rows the selected points are in, w/o duplicates
	isValidArray(points,"getRows");
	var rows = new Array;
	for(var i = 0; i < points.length; i++){
		rows.push(point2Row(points[i]));
	}
	rows.sort();
	var curr=-1;
	var cleanRows=[];
	for (var i=0; i<rows.length; i++){
		if (rows[i]!=curr){
			cleanRows.push(rows[i]);
			curr=rows[i];
		}
	}
	return cleanRows;
}

function getCols(points){
	//input: selection
	//output: Cols the selected points are in, w/o duplicates
	isValidArray(points,"getCols");
	var cols = new Array;
	for(var j = 0; j < points.length; j++){
		cols.push(point2Col(points[j]));
	}
	cols.sort();
	var curr=-1;
	var cleanCols=[];
	for (var j=0; j<cols.length; j++){
		if (cols[j]!=curr){
			cleanCols.push(cols[j]);
			curr=cols[j];
		}
	}
	return cleanCols;
}

function getBoxes(points){
	//input: selection
	//output: boxes the selected points are in, w/o duplicates
	isValidArray(points,"getBoxes");
	var boxes = new Array;
	for(var i = 0; i < points.length; i++){
		boxes.push(point2Box(points[i]));
	}
	boxes.sort();
	var curr=-1;
	var cleanBoxes=[];
	for (var i=0; i<boxes.length; i++){
		if (boxes[i]!=curr){
			cleanBoxes.push(boxes[i]);
			curr=boxes[i];
		}
	}
	return cleanBoxes;
}

function getValue(point){
	//returns the value at the point
	return board[point.row][point.col];
}
function getValues(points){
	//returns the values in the array of points
	isValidArray(points,"getValues");
	var vals = new Array;
	for(var i = 0; i < points.length; i++){
		vals.push(getValue(points[i]));
	}
	return vals;
}

function whereDemNumbersAtYo(points, number){
	//given an input of a selection and number
	//returns rows/cols/boxes where the number is
	isValidArray(points,"whereDemNumbersAtYo");
	var i = 0;
	var subpoints = find(points, number);
	var zones = new Array;
	for(i = 0; i < points.length; i++){
		zones.push(points);
	}
}

function checkBoardValidity(board){
// checks if board is in a valid configuration
// returns [validity, mistakes]
//DOES NOT WORK
    var valid = 1;
    var mistakes = [];
    
    // cycle through all the points
    for (var i=0;i<board.length;i++){
        for (var j=0;j<board.length;j++){
            
            // the the row/col/box and value of the point
            p = new point(i,j);
            var val = getValue(p);
            var row = getRow(p);
            var col = getCol(p);
            var box = getBox(p);
            
            // set board as invalid and push the point onto the mistakes array if invalid
            if (countNum(row,val) > 1){
                valid = 0;
                mistakes.push(p);
            }
            else if (countNum(col,val) > 1){
                valid = 0;
                mistakes.push(p);
            }
            else if (countNum(box,val) > 1){
                valid = 0;
                mistakes.push(p);
            }            
        }
    }
    return valid;
}

function updateBoard(row, col, number){
	//updates the board at the point to the number
	//does not let you overwrite original values
	//and at the moment does not let you make invalid moves
	//returns true iff array successfully changed	
	if(originalBoard[row][col] == 0 & solvedBoard[row][col] == number){
		board[row][col] = number;
		return true;
	}
	else{
		return false;
	}
}	

function select(type, num){
	//returns an array of points in the given zone
	var sel = [];
    if (type=="row"){
        sel = getRow(num);
    }
    else if (type=="col"){
        sel = getCol(num);
    }
    else if (type=="box"){
        sel = getBox(num);
    }
    //console.log(type, num, "selected");
    isValidArray(sel,"select");
    return sel;
}


function goTo(i,j){
	//returns a point a singleton array consisting of the point(i,j)
    p = new point(i,j);
    return [p]
}

function read(selection){
	//returns an array of values corresponding to the selection
	isValidArray(selection,"read");
	var values = getValues(selection);  
	//console.log(values);
	return values;
}


function canFillPoint(row, col){
	//returns 1 if original board and current board are empty
	//returns 0 if original board is empty and current board is not 
	//returns 0 if original board is full
	if(originalBoard[row][col] == 0 & board[row][col] == 0){
		return 1;
	}
	else{
		return 0;
	}
}

function checkInput(row, col, number){
	//returns 1 if desired input is correct
	//0 if not
	if(solvedBoard[row][col] == number){
		return 1;
	}
	else{
		return 0;
	}
}

function getBoardAsArray(){
	return board;
}

function getCompletionPercent(){
}

/*
a = findBestOptions();
a = getBox(1)
console.log(findMissingNumbers(a));

ps = selectBoard();
//printPoints(ps);
for(i = 0; i < ps.length; i++){
	//console.log(point2Box(ps[i]));
}

a = findLeastMissingRows();
b = findLeastMissingCols();
c = findLeastMissingBoxes();

ps = getBox(1,1);
myPs = find(ps,9);
printPoints(myPs);
//console.log(countNum(ps, 9));
//console.log(contains(ps,9));
//console.log(contains(ps,10));


printPoints(getBox(0,1));
//console.log("hi1");
printPoints(getCol(3));
//console.log("hi1");
printPoints(getRow(3));
//console.log("hi1");

var p = new point(3,3);
a = point2Box(p);
*/
