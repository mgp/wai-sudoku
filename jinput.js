           

	 $(function() {
		var controlSwitch = false;
		var controlSwitchRCB = "x";
		var tCounter = 0;
		
                $(window).keydown(function(e) {
		   if((controlSwitch == false)
		      if((tCounter > 0) && (e.which == 84)){
			tCounter++;
			switch(controlSwitchRCB){
				case R:	
					output("Next best row option is " + bestRowOptions(tCounter)[0] + ".");
					tcounter++;
					break;
				case C:
					output("Next best column option is " + bestColumnOptions(tCounter)[0] + ".");
					tcounter++;
					break;
				case B:
					output("Next best box option is " + bestBoxOptions(tCounter)[0] + ".");
					tcounter++;
					break;
			}
		      } else {
			tCounter = 0;
		      }
		      switch(e.which){
				
                   	case 37:
                                move("left");
                                break;
                        case 38:
                                move("up");
                                break;
                        case 39:
                                move("right");
                                break;
                        case 40:
                                move("down");
                                break;
                        case 49:
                                fillCurrentCell("1");
                                break;
                        case 50:
                                fillCurrentCell("2");
                                break;
                        case 51:
                                fillCurrentCell("3");
                                break;
                        case 52:
                                fillCurrentCell("4");
                                break;
                        case 53:
                                fillCurrentCell("5");
                                break;
                        case 54:
                                fillCurrentCell("6");
                                break;
                        case 55:
                                fillCurrentCell("7");
                                break;
                        case 56:
                                fillCurrentCell("8");
                                break;
                        case 57:
                                fillCurrentCell("9");
                                break;

			case 82:
				controlSwitch = true;
				controlSwitchRCB = R;
				break;
			case 67:
				controlSwitch = true;
				controlSwitchRCB = C;
				break;
			case 66:
				controlSwitch = true;
				controlSwitchRCB = B;
				break;	
			}
		      )
		      
		   if((controlSwitch == true)
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
					case R: 
						if(contains(select("row", getCurrentRowIndex())))
							output("Yes, row " + getCurrentRowIndex() + 1 + " contains a " + (e.which - 48) + ".");
						else
							output("No, row " + getCurrentRowIndex() + 1 + " does not contain a " + (e.which - 48) + ".");
						break;
					case C:
						if(contains(select("column", getCurrentColumnIndex())))
							output("Yes, column " + getCurrentColumnIndex() + 1 + " contains a " + (e.which - 48) + ".");
						else
							output("No, column " + getCurrentColumnIndex() + 1 + " does not contain a " + (e.which - 48) + ".");
						break;
					case B:
						if(contains(select("box", getCurrentBoxIndex())))
							output("Yes, box " + getCurrentBoxIndex() + 1 + " contains a " + (e.which - 48) + ".");
						else
							output("No, box " + getCurrentBoxIndex() + 1 + " does not contain a " + (e.which - 48) + ".");
						break;
				break;

			case 82:
                                switch(controlSwitchRCB){
					case R:
						var results = read(select("row", getCurrentRowIndex()));
						var outputString = "Row " + getCurrentRowIndex() + 1 + " contains ";
						for(var i = 0; i<9; i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case C:
						var results = read(select("column", getCurrentColumnIndex()));
						var outputString = "Column " + getCurrentColumnIndex() + 1 + " contains ";
						for(var i = 0; i<9; i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case B:
						var results = read(select("box", getCurrentBoxIndex()));
						var outputString = "Box " + getCurrentBoxIndex() + 1 + " contains ";
						for(var i = 0; i<9; i++)
							outputString += results[i] + " "
						output(outputString);
						break;
				break;  
 
			case 77:
                                switch(controlSwitchRCB){
					case R:
						var results = findMissingNumbers(select("row", getCurrentRowIndex()))
						var outputString = "Row " + getCurrentRowIndex() + 1 + " is missing ";
						for(var i = 0; i<results.length(); i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case C:
						var results = findMissingNumbers(select("column", getCurrentColumnIndex()));
						var outputString = "Column " + getCurrentColumnIndex() + 1 + " is missing ";
						for(var i = 0; i<results.length(); i++)
							outputString += results[i] + " ";
						output(outputString);
						break;   
					case B:
						var results = findMissingNumbers(select("box", getCurrentBoxIndex()));
						var outputString = "Box " + getCurrentBoxIndex() + 1 + " is missing ";
						for(var i = 0; i<results.length(); i++)
							outputString += results[i] + " ";
						output(outputString);
						break;
				break;  
							
			case 84:
                                switch(controlSwitchRCB){
					case R:	
						output("Best row option is " + bestRowOptions(1)[0] + ".");
						tcounter++;
						break;
					case C:
						output("Best column option is " + bestColumnOptions(1)[0] + ".");
						tcounter++;
						break;
					case B:
						output("Best box option is " + bestBoxOptions(1)[0] + ".");
						tcounter++;
						break;
				
				break;

			controlSwitch = false;
			
		   });
	
		});
