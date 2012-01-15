           

	 $(function() {

	 	fillGrid();


		var controlSwitch = false;
		var controlSwitchRCB = "x";
		var tCounter = 0;
               
		 $("#inputbox").keydown(function(e) {
		   if(checkSolved()){
			fillGrid();
			return true;
		   }	

		   if(controlSwitch == false){
		      if((tCounter > 0) && (e.which == 84) && (tCounter < 9)){
			tCounter++;
			switch(controlSwitchRCB){
				case 'R':	
					output("Next best row option is " + (bestRowOptions(tCounter)[0] + 1) + ".");
					break;
				case 'C':
					output("Next best column option is " + (bestColOptions(tCounter)[0] + 1) + ".");
					break;
				case 'B':
					output("Next best box option is " + (bestBoxOptions(tCounter)[0] + 1) + ".");
					break;
			}
		      } else if(tCounter == 9) {
			tCounter = 1;
			switch(controlSwitchRCB){
				case 'R':	
					output("Starting over, the best row option is " + (bestRowOptions(tCounter)[0] + 1) + ".");
					break;
				case 'C':
					output("Starting over, the best column option is " + (bestColOptions(tCounter)[0] + 1) + ".");
					break;
				case 'B':
					output("Starting over, the best box option is " + (bestBoxOptions(tCounter)[0] + 1) + ".");
					break;
			}
		      } else {
			tCounter = 0;
		      }
		      switch(e.which){
				
                   	case 65:
                                move("left");
                                break;
                        case 87:
                                move("up");
                                break;
                        case 68:
                                move("right");
                                break;
                        case 83:
                                move("down");
                                break;
                        case 49:
                                fillCurrentCell("1");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 50:
                                fillCurrentCell("2");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 51:
                                fillCurrentCell("3");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 52:
                                fillCurrentCell("4");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 53:
                                fillCurrentCell("5");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 54:
                                fillCurrentCell("6");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 55:
                                fillCurrentCell("7");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 56:
                                fillCurrentCell("8");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
                        case 57:
                                fillCurrentCell("9");
		   		if(checkSolved())
					output("Congratulations, you won! \n Press any key to start new game!");	
                                break;
			case 82:
				controlSwitch = true;
				controlSwitchRCB = 'R';
				output("Row selected, choose an option.");
				break;
			case 67:
				controlSwitch = true;
				controlSwitchRCB = 'C';
				output("Column selected, choose an option.");
				break;
			case 66:
				controlSwitch = true;
				controlSwitchRCB = 'B';
				output("Box selected, choose an option.");
				break;
		//	case 83:
		//		output("Are you sure you would like to solve the puzzle? y / n");
		//		solve();
		//		break;
			}	
		   } else if(controlSwitch == true){
		      switch(e.which){
	
                   	case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
                                switch(controlSwitchRCB){
					case 'R': 
						if(contains(select("row", getCurrentRowIndex()), e.which - 48))
							output("Yes, row " + (getCurrentRowIndex() + 1) + " contains a " + (e.which - 48) + ".");
						else
							output("No, row " + (getCurrentRowIndex() + 1) + " does not contain a " + (e.which - 48) + ".");
						break;
					case 'C':
						if(contains(select("col", getCurrentColIndex()), e.which - 48))
							output("Yes, column " + (getCurrentColIndex() + 1) + " contains a " + (e.which - 48) + ".");
						else
							output("No, column " + (getCurrentColIndex() + 1) + " does not contain a " + (e.which - 48) + ".");
						break;
					case 'B':
						if(contains(select("box", getCurrentBoxIndex()), e.which - 48))
							output("Yes, box " + (getCurrentBoxIndex() + 1) + " contains a " + (e.which - 48) + ".");
						else
							output("No, box " + (getCurrentBoxIndex() + 1) + " does not contain a " + (e.which - 48) + ".");
						break;
				}
				break;
				
			case 82:
                                switch(controlSwitchRCB){
					case 'R':
						var results = read(select("row", getCurrentRowIndex()));
						var outputString = "Row " + (getCurrentRowIndex() + 1) + " contains ";
						for(var i = 0; i<9; i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case 'C':
						var results = read(select("col", getCurrentColIndex()));
						var outputString = "Column " + (getCurrentColIndex() + 1) + " contains ";
						for(var i = 0; i<9; i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case 'B':
						var results = read(select("box", getCurrentBoxIndex()));
						var outputString = "Box " + (getCurrentBoxIndex() + 1) + " contains ";
						for(var i = 0; i<9; i++)
							outputString += results[i] + " "
						output(outputString);
						break;
				}
				break;  
 
			case 77:
                                switch(controlSwitchRCB){
					case 'R':
						var results = findMissingNumbers(select("row", getCurrentRowIndex()))
						var outputString = "Row " + (getCurrentRowIndex() + 1) + " is missing ";
						for(var i = 0; i<results.length; i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case 'C':
						var results = findMissingNumbers(select("col", getCurrentColIndex()));
						var outputString = "Column " + (getCurrentColIndex() + 1) + " is missing ";
						for(var i = 0; i<results.length; i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case 'B':
						var results = findMissingNumbers(select("box", getCurrentBoxIndex()));
						var outputString = "Box " + (getCurrentBoxIndex() + 1) + " is missing ";
						for(var i = 0; i<results.length; i++)
							outputString += results[i] + " ";
						output(outputString);
						break;
				}
				break;  
							
			case 84:
                                switch(controlSwitchRCB){
					case 'R':	
						output("Best row option is " + (bestRowOptions(1)[0] + 1) + ".");
						tCounter++;
						break;
					case 'C':
						output("Best column option is " + (bestColOptions(1)[0] + 1) + ".");
						tCounter++;
						break;
					case 'B':
						output("Best box option is " + (bestBoxOptions(1)[0] + 1) + ".");
						tCounter++;
						break;
				
				}
				break;
			}
			controlSwitch = false;
		  }
		  return false;
	      });

	      $("#inputbox").blur(function() { 
	      	setTimeout(function() { $("#inputbox").focus(); }, 5);
	      });
	});
