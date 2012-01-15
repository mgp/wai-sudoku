function fillCurrentCell(number)
{
    var curRowIndex=getRowCoordinate(cell);
    var curColIndex=getColCoordinate(cell);
    //var isValidCell=ValidCell(curRowIndex,curColIndex);//bool to get if its a valid cell
    var isValidCell=1;
    if(isValidCell==1)
    {
        //if its not a part of the sudoku actual grid
        document.getElementById("speechoutput").innerHTML = "Filled "+ number;
        document.getElementById(cell).innerHTML = number;
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

    var firstCol='0';
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