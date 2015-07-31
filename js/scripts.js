/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).load(function() {
    
    /* SLIDER START */
        
      $('.flexslider').flexslider({
        animation: "slide"
      });

    /* END */


    /* MANAGE DISPLAY LESSON'S BLOCK */

    //TODO
    //Don't forget use method addClass(), closest()

    var blocksOfLessons = (function() {
        var arrOfLessons = $( ".cource-lesson" );

        var addAttrFlag = function() {
            $.each( arrOfLessons, function() {
                $(this).attr( "flag" , "0" );
            });
        };


        var isClicked = function() {
            alert( "The toggle was clicked!" );
        };

        var isClickedTwice = function() {
            alert( "The toggle was clicked twice!" );
        };

        var setHandlerClickOnToggle = function() {
            $( this ).find( ".icon-down-open" ).click(function() {
                $.each( arrOfLessons, function() {
                    if ( $( this ).attr( "flag" ) === "0" ) {
                        isClicked();
                        $( this ).attr( "flag" , "1" );
                    } else {
                        isClickedTwice();
                        $( this ).attr( "flag" , "0" );
                    }
                });
            });
        };

        addAttrFlag();
        setHandlerClickOnToggle();

    })();

    /* END */

});
