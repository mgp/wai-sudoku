function fillCurrentCell(number)
{
    var curRowIndex=getRowCoordinate(cell);
    var curColIndex=getColCoordinate(cell);
    var isValidCell=canFillPoint(curRowIndex,curColIndex);//bool to get if its a valid cell
    //var isValidCell=1;

    var isRightSolution=1;
    if(isValidCell==1)
    {
        //if its not a part of the sudoku actual grid
        isRightSolution=checkInput(curRowIndex,curColIndex,number);
        if(isRightSolution==1)
        {
            output("Filled "+ number);
            document.getElementById(cell).innerHTML = number;
			
            document.getElementById(cell).style.color = '1f7b67';
			updateBoard(curRowIndex,curColIndex,number);
        }
        else
        {
            output("Wrong Answer!");
        }
    }
    else if(isValidCell==0)//its overwriting an already written number
    {
        output("Can't overwrite a grid number") ;
    }
    
}
function getRowCoordinate(cellnumber)
{
    var row=cellnumber.charAt(0);
    var firstRow='a';
    var curRowIndex=row.charCodeAt(0)-firstRow.charCodeAt(0);
    return curRowIndex;
}
function getColCoordinate(cellnumber)
{
    var col=cellnumber.charAt(1);

    var firstCol='1';
    var curColIndex=col.charCodeAt(0)-firstCol.charCodeAt(0);

    return curColIndex;
}
function getRowCharacter(number)
{
    var firstRow='a';
    var curRowChar=firstRow.charCodeAt(0)+number;
    return String.fromCharCode(curRowChar);
}
function getColCharacter(number)
{
    var firstCol='0';
    var curColChar=number+firstCol.charCodeAt(0)+1;
    return String.fromCharCode(curColChar);
}
function getCurrentRowIndex()
{
    return getRowCoordinate(cell);
}
function getCurrentColIndex()
{
    return getColCoordinate(cell);
}
function output(textoutput)
{
    $("#inputbox").val(textoutput);
}
function getCurrentBoxIndex()
{
    var boxIndex=3*(parseInt(getCurrentRowIndex()/3)) + parseInt(getCurrentColIndex()/3) ;
    return boxIndex;
}
