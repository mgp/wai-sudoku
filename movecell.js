

            function move(movt)
            {
               
                var row=cell.charAt(0);
                var col=cell.charAt(1);
                var newRownum;
                var newRowChar;
                var newColnum;
                var newColChar;
                var cellnew="beep";
                crossedBox=0;
                if(movt=="up")
                {
                     if(row!='a') //cant go above
                     {
                        newRow=row.charCodeAt(0);
                        newRow=newRow-1;

                        newRowChar=String.fromCharCode(newRow);
                        cellnew=newRowChar+col;
                        if(parseInt(getRowCoordinate(cellnew)/3)!=parseInt(getRowCoordinate(cell)/3))//it crossed a box
                        {
                            crossedBox=1;
                        }
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
                        if(parseInt(getRowCoordinate(cellnew)/3)!=parseInt(getRowCoordinate(cell)/3))//it crossed a box
                        {
                            crossedBox=1;
                        }
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
                        if(parseInt(getColCoordinate(cellnew)/3)!=parseInt(getColCoordinate(cell)/3))//it crossed a box
                        {
                            crossedBox=1;
                        }
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
                        if(parseInt(getColCoordinate(cellnew)/3)!=parseInt(getColCoordinate(cell)/3))//it crossed a box
                        {
                            crossedBox=1;
                        }
                     }
                }
                    moveBetweenCells(cell,cellnew);

            }
            function color(cell, colr) {
                var cellNode = document.getElementById(cell);
                var num = cellNode.innerHTML;
                if (colr == 0) {
                    cellNode.className = cellNode.className.replace(/highlighted/, '');
                } else if (colr == 1) {
                    if (!/highlighted/.test(cellNode.className)) {
                        cellNode.className += ' highlighted';
                    }

                    var outstring = "";
                    if (crossedBox == 1) {
                        outstring = "Line ";
                    }

                    if (num == "&nbsp;") {
                        output(outstring + "blank");
                    } else {
                        output(outstring + num);
                    }
                }

            }
            function moveBetweenCells(cellold,cellnew)
            {

                if (cellnew == "beep")
                {
                    output("Beep");
                }
                else
                {
                    color(cellold,0);
                    color(cellnew,1);
                    cell=cellnew;

                }

            }