
            function move(movt)
            {
                var cell=document.getElementById("cellnumber").innerHTML;

                var row=cell.charAt(0);
                var col=cell.charAt(1);
                //document.getElementById("speechoutput").innerHTML = row + col;
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
                    document.getElementById(cell).style.color = 'black';

                }
                else if(colr==1)
                {
                    document.getElementById(cell).style.color = 'red';
                    document.getElementById("speechoutput").innerHTML = num;
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
                    document.getElementById("cellnumber").innerHTML = cellnew;

                }

            }