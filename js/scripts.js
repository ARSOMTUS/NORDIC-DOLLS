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

    var manageLessonBlock = (function(){
        var arrOfLessons = $(".cource-lesson");
        //Constant property for Toggle.
        //var ATTR_CLASS_OF_DESCRIPTION = "description-lesson";
        //var ATTR_CLASS_OF_HEADER =  "header-lesson";
        //var ATTR_CLASS_OF_OPEN_TOGGLE = "icon-up-open";
        //var ATTR_CLASS_OF_CLOSE_TOGGLE = "icon-down-open";

        var isClicked = function(){
            alert("The toggle was clicked!");
        };

//        var isClickedTwice = function(){
//            alert("The toggle was clicked twice!");
//        };
//
//        var addAttrFlagToToggle = function(){
//            $.each(arrOfToggles, function(){
//                $(this).attr("flag", "0");
//            });
//        };


        var setHandlerClickOnToggle = function(){
            $.each(arrOfLessons, function(){
                $( "#" + $(this).attr("id") ).find(".icon-down-open").click(function() {
                    isClicked();
                });
            });
        };

//        addAttrFlagToToggle();
        setHandlerClickOnToggle();
//        return {
//        };

    })();

    /* END */

});
