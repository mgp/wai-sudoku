           

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
                                alert('1');
                                break;
                        case 50:
                                alert("2");
                                break;
                        case 51:
                                alert("3");
                                break;
                        case 52:
                                alert("4");
                                break;
                        case 53:
                                alert("5");
                                break;
                        case 54:
                                alert("6");
                                break;
                        case 55:
                                alert("7");
                                break;
                        case 56:
                                alert("8");
                                break;
                        case 57:
                                alert("9");
                                break;

                   }    
                
                });
            });
