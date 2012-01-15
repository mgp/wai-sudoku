$(document).ready(function() {
    cell='a1';
 boardLength = 9;

//board is stored as a 9x9 array of numbers; 0 denotes blank
 board = [[0,0,5,6,0,0,9,4,3],[3,0,0,0,4,0,0,0,0],[0,4,0,0,0,0,7,0,6],[0,7,0,0,9,4,0,0,0],[6,0,2,0,0,0,4,0,5],[0,0,0,2,6,0,0,3,0],[1,0,3,0,0,0,0,7,0],[0,0,0,0,5,0,0,0,9],[8,9,4,0,0,7,6,0,0]];
 solvedBoard = [[7,1,5,6,8,2,9,4,3],[3,2,6,7,4,9,5,8,1],[9,4,8,5,1,3,7,2,6],[5,7,1,3,9,4,2,6,8],[6,3,2,8,7,1,4,9,5],[4,8,9,2,6,5,1,3,7],[1,5,3,9,2,6,8,7,4],[2,6,7,4,5,7,3,1,9],[8,9,4,1,3,7,6,5,2]];
 originalBoard=board;

    /*origgridnum=[[0,0,0,0,0,0,0,0,0],
                 [0,2,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,3,0],
                 [0,0,0,0,1,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,8,0,0,2,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,2]];*/
       origgridnum=board;
      
});

            function move(movt)
            {
               
                var row=cell.charAt(0);
                var col=cell.charAt(1);
                var newRownum;
                var newRowChar;
                var newColnum;
                var newColChar;
                var cellnew="beep";

                if(movt=="up")
                {
                     if(row!='a') //cant go above
                     {
                        newRow=row.charCodeAt(0);
                        newRow=newRow-1;
                        newRowChar=String.fromCharCode(newRow);
                        cellnew=newRowChar+col;
                     }

                }
                else if(movt=="down")
                {
                     if(row!='i') //cant go below
                     {
                        newRow=row.charCodeAt(0);
                        newRow=newRow+1;
                        newRowChar=String.fromCharCode(newRow);
                        cellnew=newRowChar+col;
                     }
                }
                else if(movt=="right")
                {
                     if(col!='9')
                     {
                        newCol=col.charCodeAt(0);
                        newCol=newCol+1;
                        newColChar=String.fromCharCode(newCol);
                        cellnew=row+newColChar;
                     }
                }
                else if(movt=="left")
                {
                    if(col!=1)
                     {
                        newCol=col.charCodeAt(0);
                        newCol=newCol-1;
                        newColChar=String.fromCharCode(newCol);
                        cellnew=row+newColChar;
                     }
                }

                     output(cell,cellnew);

            }
            function color(cell,colr)
            {
                var num=document.getElementById(cell).innerHTML;
                if(colr==0)
                {
                    //console.log('yeahhh');
                    document.getElementById(cell).style.backgroundColor = "white";
                    

                }
                else if(colr==1)
                {
                    document.getElementById(cell).style.backgroundColor = "yellow";
                    if(num=="&nbsp;")
                    {
                        document.getElementById("speechoutput").innerHTML = "blank";
                    }
                    else
                    {
                        document.getElementById("speechoutput").innerHTML = num;
                    }
                }

            }
            function output(cellold,cellnew)
            {

                if(cellnew=="beep")
                {
                    document.getElementById("speechoutput").innerHTML = "Beep";
                }
                else
                {
                    color(cellold,0);
                    color(cellnew,1);
                    cell=cellnew;

                }

            }