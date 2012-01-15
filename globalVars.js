$(document).ready(function() {
    cell='a1';
    boardLength = 9;

    //board is stored as a 9x9 array of numbers; 0 denotes blank
    //store sample boards in an array
    boards = new Array;
    originalBoard = new Array;
	solvedBoards = new Array;
	boards.push([[0,0,5,6,0,0,9,4,3],[3,0,0,0,4,0,0,0,0],[0,4,0,0,0,0,7,0,6],[0,7,0,0,9,4,0,0,0],[6,0,2,0,0,0,4,0,5],[0,0,0,2,6,0,0,3,0],[1,0,3,0,0,0,0,7,0],[0,0,0,0,5,0,0,0,9],[8,9,4,0,0,7,6,0,0]]);
	solvedBoards.push([[7,1,5,6,8,2,9,4,3],[3,2,6,7,4,9,5,8,1],[9,4,8,5,1,3,7,2,6],[5,7,1,3,9,4,2,6,8],[6,3,2,8,7,1,4,9,5],[4,8,9,2,6,5,1,3,7],[1,5,3,9,2,6,8,7,4],[2,6,7,4,5,8,3,1,9],[8,9,4,1,3,7,6,5,2]]);
	
	boards.push([[6,0,0,7,0,8,9,0,0],[1,0,0,0,3,6,7,5,0],[7,0,4,5,0,0,0,6,1],[0,2,7,0,0,0,0,4,8],[0,0,1,0,0,0,6,0,0],[8,6,0,0,0,0,2,1,0],[2,8,0,0,0,1,4,0,6],[0,7,5,6,2,0,0,0,9],[0,0,6,8,0,9,0,0,3]]);
	solvedBoards.push([[6,5,2,7,1,8,9,3,4],[1,9,8,4,3,6,7,5,2],[7,3,4,5,9,2,8,6,1],[9,2,7,1,6,5,3,4,8],[5,4,1,2,8,3,6,9,7],[8,6,3,9,4,7,2,1,5],[2,8,9,3,5,1,4,7,6],[3,7,5,6,2,4,1,8,9],[4,1,6,8,7,9,5,2,3]]);
	
	boards.push([[0,0,2,6,0,0,5,9,8],[4,0,3,0,8,0,0,2,0],[5,8,0,9,2,7,0,0,4],[0,0,9,0,4,0,0,0,0],[0,4,7,2,5,8,3,1,0],[0,0,0,0,7,0,6,0,0],[7,0,0,4,6,2,0,5,3],[0,6,0,0,1,0,4,0,2],[2,3,4,0,0,5,8,0,0]]);
	solvedBoards.push([[1,7,2,6,3,4,5,9,8],[4,9,3,5,8,1,7,2,6],[5,8,6,9,2,7,1,3,4],[3,5,9,1,4,6,2,8,7],[6,4,7,2,5,8,3,1,9],[8,2,1,3,7,9,6,4,5],[7,1,8,4,6,2,9,5,3],[9,6,5,8,1,3,4,7,2],[2,3,4,7,9,5,8,6,1]]);
	
	//--------------adding boards
	boards.push([[7,5,6,3,0,0,9,0,4],[9,8,2,0,4,6,0,7,0],[0,0,4,2,0,0,6,8,0],[0,2,8,1,0,4,3,0,0],[4,0,7,6,0,8,5,0,1],[1,6,9,7,3,5,0,4,0],[0,0,0,9,5,7,8,3,2],[8,9,0,4,1,2,0,5,6],[2,7,0,0,0,3,4,1,9]]);
	boards.push([[3,0,4,2,0,0,8,0,6],[0,0,0,0,0,8,2,4,9],[0,8,2,0,6,0,7,3,1],[0,0,0,6,8,2,0,0,5],[1,0,9,0,5,3,4,8,2],[5,2,8,0,0,9,6,0,3],[2,7,5,0,0,6,1,9,0],[6,0,0,9,0,5,3,0,0],[0,9,3,4,0,1,5,6,7]]);
	boards.push([[8,0,2,6,4,0,0,0,0],[0,3,4,0,7,2,0,0,0],[0,0,6,1,0,3,0,0,0],[2,0,0,0,9,0,0,6,7],[3,4,0,8,2,0,5,9,1],[0,1,9,5,3,7,2,4,0],[0,2,0,3,6,0,4,0,9],[0,6,1,7,0,0,0,3,2],[9,8,3,2,0,4,0,5,0]]);
	boards.push([[8,2,0,5,0,0,1,7,3],[5,0,7,3,1,0,9,2,0],[1,4,0,2,0,0,6,8,5],[0,9,1,7,0,3,0,0,0],[2,8,5,1,0,9,3,6,7],[3,0,0,0,0,0,0,9,0],[4,0,0,9,0,0,8,3,2],[7,0,2,0,3,0,4,1,9],[9,3,8,0,0,0,0,0,0]]);
	boards.push([[4,1,0,0,7,2,0,5,6],[2,8,9,0,4,5,7,3,1],[0,5,0,1,0,3,0,4,9],[8,2,0,4,9,0,0,7,3],[9,6,1,5,3,0,4,8,2],[7,3,0,8,2,6,9,1,0],[5,7,0,3,6,8,1,0,0],[1,0,6,7,5,9,0,2,8],[3,9,8,2,1,0,5,6,7]]);
	boards.push([[1,3,0,0,0,0,5,8,6],[0,7,0,3,1,8,0,2,9],[8,9,0,5,6,4,3,7,0],[2,0,8,1,4,0,7,0,0],[0,1,0,0,5,0,8,0,0],[3,0,7,0,8,0,0,9,5],[9,8,3,4,2,0,0,5,7],[4,6,1,9,7,0,0,0,0],[7,2,0,8,3,0,9,0,4]]);
	boards.push([[8,9,2,0,6,5,1,7,3],[0,0,4,0,9,2,6,8,0],[5,7,0,0,0,0,0,0,4],[0,5,8,9,0,0,3,0,0],[0,0,9,0,5,7,2,4,8],[3,4,7,2,0,0,0,9,1],[0,8,3,0,2,4,7,0,0],[4,6,0,5,7,9,8,3,0],[7,0,5,0,0,8,0,1,9]]);
	boards.push([[0,7,6,1,8,3,9,2,4],[0,9,2,6,0,0,1,0,0],[0,0,4,9,0,2,0,0,0],[3,0,7,8,2,6,0,9,1],[0,0,9,0,0,0,0,4,8],[2,0,8,4,9,0,0,0,7],[0,0,0,3,0,0,0,1,9],[0,6,0,0,5,9,0,3,2],[9,8,0,2,0,4,0,5,0]]);
	boards.push([[7,0,5,8,3,1,0,4,0],[3,0,0,7,0,9,6,5,8],[0,2,8,0,5,6,0,3,0],[4,7,3,2,0,8,5,0,9],[5,0,0,9,1,4,0,0,6],[0,0,6,3,0,0,0,0,0],[0,0,9,1,0,2,0,6,5],[6,1,4,5,9,7,8,2,3],[2,5,7,6,8,0,0,0,0]]);
	boards.push([[0,7,0,0,0,8,9,2,0],[8,9,2,5,6,4,0,0,0],[1,3,4,2,0,0,0,0,5],[6,1,0,0,5,0,2,4,8],[0,5,8,1,4,9,0,6,7],[3,4,7,0,0,0,0,9,1],[4,0,1,0,7,0,8,0,2],[0,0,0,8,0,6,0,1,9],[0,8,3,0,0,1,7,5,6]]);
	boards.push([[0,9,0,4,5,6,7,0,0],[1,0,0,0,2,0,8,5,6],[5,0,6,8,0,1,2,4,9],[0,0,9,0,7,5,4,8,2],[2,5,8,9,1,4,6,0,3],[0,4,7,2,6,0,0,1,0],[4,0,1,5,9,7,0,2,0],[0,2,0,6,8,0,0,9,4],[9,0,3,1,4,2,0,6,7]]);
	boards.push([[5,0,0,0,0,3,0,0,9],[8,2,9,4,6,0,3,0,1],[1,0,3,7,9,2,0,0,6],[2,8,5,9,4,0,7,6,0],[3,0,4,0,0,6,1,0,0],[6,9,1,3,5,7,0,4,0],[0,3,0,0,2,0,0,0,0],[4,1,6,0,0,0,0,0,8],[0,5,2,6,0,0,0,1,0]]);
	boards.push([[1,3,0,9,2,0,5,8,0],[8,9,2,0,5,0,3,0,0],[0,7,6,1,3,8,0,0,9],[6,1,9,5,7,0,0,0,0],[3,0,0,0,0,2,1,9,5],[0,5,0,4,1,0,0,6,3],[9,0,3,2,0,0,6,0,7],[0,2,5,0,0,0,0,1,4],[0,0,0,0,0,5,2,0,8]]);
	boards.push([[6,5,0,0,0,0,9,0,2],[2,0,9,4,6,5,0,3,0],[0,1,3,7,9,2,6,5,8],[7,3,0,2,8,6,0,1,0],[8,0,5,9,0,1,3,0,6],[9,6,1,3,5,7,2,0,4],[1,4,6,0,7,0,8,2,3],[0,0,0,0,2,4,7,0,5],[5,0,0,6,3,0,0,9,1]]);
	boards.push([[9,0,2,0,0,0,0,0,3],[7,0,0,1,3,8,0,0,0],[3,1,4,9,0,0,8,0,5],[4,0,7,8,6,2,9,0,1],[1,6,9,5,7,3,0,0,0],[5,2,0,4,1,9,0,3,7],[2,7,5,3,8,6,0,0,9],[6,4,1,7,0,0,3,8,2],[8,9,3,0,0,0,0,7,6]]);
	boards.push([[8,0,2,0,5,0,3,1,7],[5,0,6,8,3,0,0,9,0],[1,0,0,0,0,0,5,0,8],[3,4,0,2,6,0,0,5,0],[6,0,0,0,7,0,8,2,0],[2,5,0,0,1,0,7,0,0],[0,2,5,0,0,3,0,0,1],[4,0,0,5,9,0,2,0,0],[0,0,3,0,4,2,6,7,5]]);
	boards.push([[4,1,0,0,2,0,0,6,5],[0,0,7,8,0,0,2,0,4],[2,0,9,4,0,6,0,0,3],[0,2,0,0,0,4,0,3,7],[0,3,0,0,6,8,0,5,1],[9,0,1,0,0,0,4,2,0],[0,7,2,0,0,3,0,4,9],[0,0,8,0,4,2,5,7,6],[0,0,0,5,9,0,0,0,2]]);
	boards.push([[0,3,4,7,0,9,6,0,8],[8,9,2,4,5,6,1,3,7],[5,0,6,0,3,1,0,4,2],[0,0,8,9,1,4,0,0,6],[6,1,0,3,7,0,0,0,0],[3,0,7,0,6,0,0,1,9],[0,0,1,5,9,0,0,2,3],[9,0,3,1,0,2,0,6,0],[7,2,0,6,0,3,4,0,1]]);
	boards.push([[9,8,2,0,6,4,0,0,0],[7,5,0,3,1,8,9,2,0],[0,0,4,0,9,0,0,8,5],[0,6,9,0,5,3,0,4,0],[0,2,0,0,0,0,0,6,7],[0,3,7,6,0,2,5,9,1],[8,9,3,0,2,0,0,0,0],[6,0,1,9,7,0,8,3,2],[2,0,0,8,3,6,4,1,0]]);
	boards.push([[2,9,0,0,6,0,3,0,0],[4,3,0,0,9,0,5,6,0],[0,7,0,3,1,8,4,0,0],[0,0,0,0,8,0,1,5,9],[8,0,2,1,4,9,0,3,6],[9,1,6,7,0,3,0,2,4],[0,0,0,4,0,0,0,7,0],[0,0,7,8,3,0,0,4,1],[1,6,0,0,0,0,0,0,3]]);
	boards.push([[2,9,0,6,4,5,0,7,3],[6,7,0,0,8,3,9,2,4],[4,3,0,9,0,2,6,0,5],[8,5,0,0,0,1,0,6,0],[0,4,0,0,2,6,0,9,1],[9,1,6,5,3,0,2,4,0],[5,0,7,3,0,0,4,1,9],[3,0,9,0,1,0,7,5,6],[1,6,4,0,5,9,0,3,0]]);
	boards.push([[7,5,6,3,0,0,9,0,4],[9,8,2,0,4,6,0,7,0],[0,0,4,2,0,0,6,8,0],[0,2,8,1,0,4,3,0,0],[4,0,7,6,0,8,5,0,1],[1,6,9,7,3,5,0,4,0],[0,0,0,9,5,7,8,3,2],[8,9,0,4,1,2,0,5,6],[2,7,0,0,0,3,4,1,9]]);

	solvedBoards.push([[7,5,6,3,8,1,9,2,4],[9,8,2,5,4,6,1,7,3],[3,1,4,2,7,9,6,8,5],[5,2,8,1,9,4,3,6,7],[4,3,7,6,2,8,5,9,1],[1,6,9,7,3,5,2,4,8],[6,4,1,9,5,7,8,3,2],[8,9,3,4,1,2,7,5,6],[2,7,5,8,6,3,4,1,9]]);
	solvedBoards.push([[3,1,4,2,9,7,8,5,6],[7,5,6,3,1,8,2,4,9],[9,8,2,5,6,4,7,3,1],[4,3,7,6,8,2,9,1,5],[1,6,9,7,5,3,4,8,2],[5,2,8,1,4,9,6,7,3],[2,7,5,8,3,6,1,9,4],[6,4,1,9,7,5,3,2,8],[8,9,3,4,2,1,5,6,7]]);
	solvedBoards.push([[8,9,2,6,4,5,1,7,3],[1,3,4,9,7,2,6,8,5],[5,7,6,1,8,3,9,2,4],[2,5,8,4,9,1,3,6,7],[3,4,7,8,2,6,5,9,1],[6,1,9,5,3,7,2,4,8],[7,2,5,3,6,8,4,1,9],[4,6,1,7,5,9,8,3,2],[9,8,3,2,1,4,7,5,6]]);
	solvedBoards.push([[8,2,9,5,6,4,1,7,3],[5,6,7,3,1,8,9,2,4],[1,4,3,2,9,7,6,8,5],[6,9,1,7,5,3,2,4,8],[2,8,5,1,4,9,3,6,7],[3,7,4,6,8,2,5,9,1],[4,1,6,9,7,5,8,3,2],[7,5,2,8,3,6,4,1,9],[9,3,8,4,2,1,7,5,6]]);
	solvedBoards.push([[4,1,3,9,7,2,8,5,6],[2,8,9,6,4,5,7,3,1],[6,5,7,1,8,3,2,4,9],[8,2,5,4,9,1,6,7,3],[9,6,1,5,3,7,4,8,2],[7,3,4,8,2,6,9,1,5],[5,7,2,3,6,8,1,9,4],[1,4,6,7,5,9,3,2,8],[3,9,8,2,1,4,5,6,7]]);
	solvedBoards.push([[1,3,4,2,9,7,5,8,6],[5,7,6,3,1,8,4,2,9],[8,9,2,5,6,4,3,7,1],[2,5,8,1,4,9,7,6,3],[6,1,9,7,5,3,8,4,2],[3,4,7,6,8,2,1,9,5],[9,8,3,4,2,1,6,5,7],[4,6,1,9,7,5,2,3,8],[7,2,5,8,3,6,9,1,4]]);
	solvedBoards.push([[8,9,2,4,6,5,1,7,3],[1,3,4,7,9,2,6,8,5],[5,7,6,8,1,3,9,2,4],[2,5,8,9,4,1,3,6,7],[6,1,9,3,5,7,2,4,8],[3,4,7,2,8,6,5,9,1],[9,8,3,1,2,4,7,5,6],[4,6,1,5,7,9,8,3,2],[7,2,5,6,3,8,4,1,9]]);
	solvedBoards.push([[5,7,6,1,8,3,9,2,4],[8,9,2,6,4,5,1,7,3],[1,3,4,9,7,2,6,8,5],[3,4,7,8,2,6,5,9,1],[6,1,9,5,3,7,2,4,8],[2,5,8,4,9,1,3,6,7],[7,2,5,3,6,8,4,1,9],[4,6,1,7,5,9,8,3,2],[9,8,3,2,1,4,7,5,6]]);
	solvedBoards.push([[7,6,5,8,3,1,9,4,2],[3,4,1,7,2,9,6,5,8],[9,2,8,4,5,6,1,3,7],[4,7,3,2,6,8,5,1,9],[5,8,2,9,1,4,3,7,6],[1,9,6,3,7,5,2,8,4],[8,3,9,1,4,2,7,6,5],[6,1,4,5,9,7,8,2,3],[2,5,7,6,8,3,4,9,1]]);
	solvedBoards.push([[5,7,6,3,1,8,9,2,4],[8,9,2,5,6,4,1,7,3],[1,3,4,2,9,7,6,8,5],[6,1,9,7,5,3,2,4,8],[2,5,8,1,4,9,3,6,7],[3,4,7,6,8,2,5,9,1],[4,6,1,9,7,5,8,3,2],[7,2,5,8,3,6,4,1,9],[9,8,3,4,2,1,7,5,6]]);
	solvedBoards.push([[8,9,2,4,5,6,7,3,1],[1,3,4,7,2,9,8,5,6],[5,7,6,8,3,1,2,4,9],[6,1,9,3,7,5,4,8,2],[2,5,8,9,1,4,6,7,3],[3,4,7,2,6,8,9,1,5],[4,6,1,5,9,7,3,2,8],[7,2,5,6,8,3,1,9,4],[9,8,3,1,4,2,5,6,7]]);
	solvedBoards.push([[5,6,7,8,1,3,4,2,9],[8,2,9,4,6,5,3,7,1],[1,4,3,7,9,2,5,8,6],[2,8,5,9,4,1,7,6,3],[3,7,4,2,8,6,1,9,5],[6,9,1,3,5,7,8,4,2],[9,3,8,1,2,4,6,5,7],[4,1,6,5,7,9,2,3,8],[7,5,2,6,3,8,9,1,4]]);
	solvedBoards.push([[1,3,4,9,2,7,5,8,6],[8,9,2,6,5,4,3,7,1],[5,7,6,1,3,8,4,2,9],[6,1,9,5,7,3,8,4,2],[3,4,7,8,6,2,1,9,5],[2,5,8,4,1,9,7,6,3],[9,8,3,2,4,1,6,5,7],[7,2,5,3,8,6,9,1,4],[4,6,1,7,9,5,2,3,8]]);
	solvedBoards.push([[6,5,7,8,1,3,9,4,2],[2,8,9,4,6,5,1,3,7],[4,1,3,7,9,2,6,5,8],[7,3,4,2,8,6,5,1,9],[8,2,5,9,4,1,3,7,6],[9,6,1,3,5,7,2,8,4],[1,4,6,5,7,9,8,2,3],[3,9,8,1,2,4,7,6,5],[5,7,2,6,3,8,4,9,1]]);
	solvedBoards.push([[9,8,2,6,5,4,7,1,3],[7,5,6,1,3,8,2,9,4],[3,1,4,9,2,7,8,6,5],[4,3,7,8,6,2,9,5,1],[1,6,9,5,7,3,4,2,8],[5,2,8,4,1,9,6,3,7],[2,7,5,3,8,6,1,4,9],[6,4,1,7,9,5,3,8,2],[8,9,3,2,4,1,5,7,6]]);
	solvedBoards.push([[8,9,2,4,5,6,3,1,7],[5,7,6,8,3,1,4,9,2],[1,3,4,7,2,9,5,6,8],[3,4,7,2,6,8,1,5,9],[6,1,9,3,7,5,8,2,4],[2,5,8,9,1,4,7,3,6],[7,2,5,6,8,3,9,4,1],[4,6,1,5,9,7,2,8,3],[9,8,3,1,4,2,6,7,5]]);
	solvedBoards.push([[4,1,3,7,2,9,8,6,5],[6,5,7,8,3,1,2,9,4],[2,8,9,4,5,6,7,1,3],[8,2,5,9,1,4,6,3,7],[7,3,4,2,6,8,9,5,1],[9,6,1,3,7,5,4,2,8],[5,7,2,6,8,3,1,4,9],[3,9,8,1,4,2,5,7,6],[1,4,6,5,9,7,3,8,2]]);
	solvedBoards.push([[1,3,4,7,2,9,6,5,8],[8,9,2,4,5,6,1,3,7],[5,7,6,8,3,1,9,4,2],[2,5,8,9,1,4,3,7,6],[6,1,9,3,7,5,2,8,4],[3,4,7,2,6,8,5,1,9],[4,6,1,5,9,7,8,2,3],[9,8,3,1,4,2,7,6,5],[7,2,5,6,8,3,4,9,1]]);
	solvedBoards.push([[9,8,2,5,6,4,1,7,3],[7,5,6,3,1,8,9,2,4],[3,1,4,2,9,7,6,8,5],[1,6,9,7,5,3,2,4,8],[5,2,8,1,4,9,3,6,7],[4,3,7,6,8,2,5,9,1],[8,9,3,4,2,1,7,5,6],[6,4,1,9,7,5,8,3,2],[2,7,5,8,3,6,4,1,9]]);
	solvedBoards.push([[2,9,8,5,6,4,3,1,7],[4,3,1,2,9,7,5,6,8],[6,7,5,3,1,8,4,9,2],[7,4,3,6,8,2,1,5,9],[8,5,2,1,4,9,7,3,6],[9,1,6,7,5,3,8,2,4],[3,8,9,4,2,1,6,7,5],[5,2,7,8,3,6,9,4,1],[1,6,4,9,7,5,2,8,3]]);
	solvedBoards.push([[2,9,8,6,4,5,1,7,3],[6,7,5,1,8,3,9,2,4],[4,3,1,9,7,2,6,8,5],[8,5,2,4,9,1,3,6,7],[7,4,3,8,2,6,5,9,1],[9,1,6,5,3,7,2,4,8],[5,2,7,3,6,8,4,1,9],[3,8,9,2,1,4,7,5,6],[1,6,4,7,5,9,8,3,2]]);
	solvedBoards.push([[7,5,6,3,8,1,9,2,4],[9,8,2,5,4,6,1,7,3],[3,1,4,2,7,9,6,8,5],[5,2,8,1,9,4,3,6,7],[4,3,7,6,2,8,5,9,1],[1,6,9,7,3,5,2,4,8],[6,4,1,9,5,7,8,3,2],[8,9,3,4,1,2,7,5,6],[2,7,5,8,6,3,4,1,9]]);
	//done adding boards----------------------------------
	//board=boards[0]; //should maybe copy by value here :[
	//solvedBoard=solvedBoards[0]; //copy by reference fine here
	//originalBoard=board;

	puzzleNumber = -1;
    
	
	crossedBox=0;

});
