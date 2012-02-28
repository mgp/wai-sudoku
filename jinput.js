

$(function () {

    TableFill.fillGrid();
    ChangeGrid.output("Welcome to Accessible Sudoku! Press h for help or begin playing");

    var controlSwitch = false;
    var controlSwitchRCB = "x";
    var tCounter = 0;
    var hCounter = 0;

    $("#inputbox").keydown(function (e) {
        if (checkSolved()) {
            TableFill.fillGrid();
            return true;
        }

        if (controlSwitch == false) {
            if ((tCounter > 0) && (e.which == 84) && (tCounter < 9)) {
                tCounter++;
                switch (controlSwitchRCB) {
                    case 'R':
                        ChangeGrid.output("Next best row option is " + (bestRowOptions(tCounter)[0] + 1) + ".");
                        break;
                    case 'C':
                        ChangeGrid.output("Next best column option is " + (bestColOptions(tCounter)[0] + 1) + ".");
                        break;
                    case 'B':
                        ChangeGrid.output("Next best box option is " + (bestBoxOptions(tCounter)[0] + 1) + ".");
                        break;
                }
            } else if (tCounter == 9) {
                tCounter = 1;
                switch (controlSwitchRCB) {
                    case 'R':
                        ChangeGrid.output("Starting over, the best row option is " + (bestRowOptions(tCounter)[0] + 1) + ".");
                        break;
                    case 'C':
                        ChangeGrid.output("Starting over, the best column option is " + (bestColOptions(tCounter)[0] + 1) + ".");
                        break;
                    case 'B':
                        ChangeGrid.output("Starting over, the best box option is " + (bestBoxOptions(tCounter)[0] + 1) + ".");
                        break;
                }
            } else {
                tCounter = 0;
            }
            if (e.which != 72 || hCounter >= 8) {
                hCounter = 0;
            }
            switch (e.which) {
                case 72:
                    switch (++hCounter) {
                        case 1:
                            ChangeGrid.output("To play, navigate using the W,A,S, and D letters to " +
                                            "move up, left, down, and right respectively. Press h to continue");
                            break;
                        case 2:
                            ChangeGrid.output("To assist you, we have also added the r, c, and b commands to select" +
                                            " the current row, column, or box of numbers.");
                            break;
                        case 3:
                            ChangeGrid.output("Once you select any of these, you may" +
                                            " press r to have that selection read out to you, from top to bottom, left to right,");
                            break;
                        case 4:
                            ChangeGrid.output("m to find out which numbers are missing from that selection,");
                            break;
                        case 5:
                            ChangeGrid.output("1 through 9 to see if that number is already present in the selection,");
                            break;
                        case 6:
                            ChangeGrid.output("and t to navigate to the next similar selection (such as the next box, row or column) " +
                                            "with the fewest missing numbers.");
                            break;
                        case 7:
                            ChangeGrid.output("Pressing t multiple times will visit each selection of that type from least complete to most complete.");
                            break;
                        case 8:
                            ChangeGrid.output("To hear these instructions again, press h, or begin playing.");
                            break;
                    }
                    break;
                case 65:
                    MoveCell.move("left");
                    break;
                case 87:
                    MoveCell.move("up");
                    break;
                case 68:
                    MoveCell.move("right");
                    break;
                case 83:
                    MoveCell.move("down");
                    break;
                case 49:
                    ChangeGrid.fillCurrentCell("1");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 50:
                    ChangeGrid.fillCurrentCell("2");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 51:
                    ChangeGrid.fillCurrentCell("3");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 52:
                    ChangeGrid.fillCurrentCell("4");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 53:
                    ChangeGrid.fillCurrentCell("5");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 54:
                    ChangeGrid.fillCurrentCell("6");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 55:
                    ChangeGrid.fillCurrentCell("7");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 56:
                    ChangeGrid.fillCurrentCell("8");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 57:
                    ChangeGrid.fillCurrentCell("9");
                    if (checkSolved())
                        ChangeGrid.output("Congratulations, you won! \n Press any key to start new game!");
                    break;
                case 82:
                    controlSwitch = true;
                    controlSwitchRCB = 'R';
                    ChangeGrid.output("Row selected, choose an option.");
                    break;
                case 67:
                    controlSwitch = true;
                    controlSwitchRCB = 'C';
                    ChangeGrid.output("Column selected, choose an option.");
                    break;
                case 66:
                    controlSwitch = true;
                    controlSwitchRCB = 'B';
                    ChangeGrid.output("Box selected, choose an option.");
                    break;
                //	case 83: 
                //		ChangeGrid.output("Are you sure you would like to solve the puzzle? y / n"); 
                //		solve(); 
                //		break; 
            }
        } else if (controlSwitch == true) {
            switch (e.which) {

                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    switch (controlSwitchRCB) {
                        case 'R':
                            if (contains(select("row", ChangeGrid.getCurrentRowIndex()), e.which - 48))
                                ChangeGrid.output("Yes, row " + (ChangeGrid.getCurrentRowIndex() + 1) + " contains a " + (e.which - 48) + ".");
                            else
                                ChangeGrid.output("No, row " + (ChangeGrid.getCurrentRowIndex() + 1) + " does not contain a " + (e.which - 48) + ".");
                            break;
                        case 'C':
                            if (contains(select("col", ChangeGrid.getCurrentColIndex()), e.which - 48))
                                ChangeGrid.output("Yes, column " + (ChangeGrid.getCurrentColIndex() + 1) + " contains a " + (e.which - 48) + ".");
                            else
                                ChangeGrid.output("No, column " + (ChangeGrid.getCurrentColIndex() + 1) + " does not contain a " + (e.which - 48) + ".");
                            break;
                        case 'B':
                            if (contains(select("box", ChangeGrid.getCurrentBoxIndex()), e.which - 48))
                                ChangeGrid.output("Yes, box " + (ChangeGrid.getCurrentBoxIndex() + 1) + " contains a " + (e.which - 48) + ".");
                            else
                                ChangeGrid.output("No, box " + (ChangeGrid.getCurrentBoxIndex() + 1) + " does not contain a " + (e.which - 48) + ".");
                            break;
                    }
                    break;

                case 82:
                    switch (controlSwitchRCB) {
                        case 'R':
                            var results = read(select("row", ChangeGrid.getCurrentRowIndex()));
                            var outputString = "Row " + (ChangeGrid.getCurrentRowIndex() + 1) + " contains ";
                            for (var i = 0; i < 9; i++)
                                outputString += (results[i] == "0" ? "blank" : results[i]) + (i == 8 ? ". " : ", ");
                            ChangeGrid.output(outputString);
                            break;
                        case 'C':
                            var results = read(select("col", ChangeGrid.getCurrentColIndex()));
                            var outputString = "Column " + (ChangeGrid.getCurrentColIndex() + 1) + " contains ";
                            for (var i = 0; i < 9; i++)
                                outputString += (results[i] == "0" ? "blank" : results[i]) + (i == 8 ? ". " : ", ");
                            ChangeGrid.output(outputString);
                            break;
                        case 'B':
                            var results = read(select("box", ChangeGrid.getCurrentBoxIndex()));
                            var outputString = "Box " + (ChangeGrid.getCurrentBoxIndex() + 1) + " contains ";
                            for (var i = 0; i < 9; i++)
                                outputString += (results[i] == "0" ? "blank" : results[i]) + (i == 8 ? ". " : ", ");
                            ChangeGrid.output(outputString);
                            break;
                    }
                    break;

                case 77:
                    switch (controlSwitchRCB) {
                        case 'R':
                            var results = findMissingNumbers(select("row", ChangeGrid.getCurrentRowIndex()))
                            var outputString = "Row " + (ChangeGrid.getCurrentRowIndex() + 1) + " is missing ";
                            for (var i = 0; i < results.length; i++)
                                outputString += results[i] + (i == results.length - 1 ? ". " : ", ");
                            ChangeGrid.output(outputString);
                            break;
                        case 'C':
                            var results = findMissingNumbers(select("col", ChangeGrid.getCurrentColIndex()));
                            var outputString = "Column " + (ChangeGrid.getCurrentColIndex() + 1) + " is missing ";
                            for (var i = 0; i < results.length; i++)
                                outputString += results[i] + (i == results.length - 1 ? ". " : ", ");
                            ChangeGrid.output(outputString);
                            break;
                        case 'B':
                            var results = findMissingNumbers(select("box", ChangeGrid.getCurrentBoxIndex()));
                            var outputString = "Box " + (ChangeGrid.getCurrentBoxIndex() + 1) + " is missing ";
                            for (var i = 0; i < results.length; i++)
                                outputString += results[i] + (i == results.length - 1 ? ". " : ", ");
                            ChangeGrid.output(outputString);
                            break;
                    }
                    break;

                case 84:
                    switch (controlSwitchRCB) {
                        case 'R':
                            ChangeGrid.output("Best row option is " + (bestRowOptions(1)[0] + 1) + ".");
                            tCounter++;
                            break;
                        case 'C':
                            ChangeGrid.output("Best column option is " + (bestColOptions(1)[0] + 1) + ".");
                            tCounter++;
                            break;
                        case 'B':
                            ChangeGrid.output("Best box option is " + (bestBoxOptions(1)[0] + 1) + ".");
                            tCounter++;
                            break;

                    }
                    break;
            }
            controlSwitch = false;
        }
        return false;
    });

    $("#inputbox").blur(function () {
        setTimeout(function () { $("#inputbox").focus(); }, 5);
    });
});
