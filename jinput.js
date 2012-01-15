           

	 $(function() {
                $(window).keydown(function(e) {
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
                                fillCurrentCell(1);
                                break;
                        case 50:
                                fillCurrentCell(2);
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

                   }    

                });

            });

	$(function() {
		var controlSwitch == false;
		var controlSwitchR == false;
		var controlSwitchC == false:
		var controlSwitchB == false;

		$(window).keydown(function(cs){
		   if((controlSwitch == false)
			switch(cs.which){
			   case 82:
				controlSwitchR == true;
				break;
			   case 67:
				controlSwitchC == true;
				break;
			   case 66:	

			}
		    )
