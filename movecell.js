$(document).ready(function() {
    cell='a1';
    origgridnum=[[0,0,0,0,0,0,0,0,0],
                 [0,2,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,3,0],
                 [0,0,0,0,1,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,8,0,0,2,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,2]];

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
                    document.getElementById(cell).style.backgroundColor = "red";
                    if(num=='')
                    {
                        document.getElementById("speechoutput").innerHTML = "blank";
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