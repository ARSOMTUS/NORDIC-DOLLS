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

    var manageLessonBlock = (function() {
        var arrOfToggles = [];
        var foundToggles = $(".icon-down-open");
        //Constant property for Toggle.
        var CLASS_OF_DESCRIPTION = "description-lesson";
        var CLASS_OF_HEADER =  "header-lesson";
        var CLASS_OF_OPEN_TOGGLE = "icon-up-open";
        var CLASS_OF_CLOSE_TOGGLE = "icon-down-open";


        $.each(foundToggles, function(){
            //Constructor for new Toggle
            function Toggle(idIn) {
                this.id = idIn;
                this.flag = 0;
            }
            var tempObjToggle = new Toggle( $(this).attr("id") )
            arrOfToggles.push(tempObjToggle);
        });

//        $(arrOfToggles).each().click( clickOnToggle );

        var clickOnToggle = function () {
            alert("The toggle is clicked!");
        };

        $(arrOfToggles).each( function(){
            $(arrOfToggles).click( function() {
                clickOnToggle();
            });
        });

//        $.each(arrOfToggles, function(){
//            var tempId = $(this).attr("id");
//            $("#" + tempId).click(function (){
//                clickOnToggle();
////            //'Toggle ' + $(arrOfToggles).attr("id") + 'is clicked!'
//            });
//        });

        //            var tempId = $(this).attr("id");
////            console.log(tempId);
//            $("#" + tempId).click(function (){
//                alert("Is clicked!");
//            //'Toggle ' + $(arrOfToggles).attr("id") + 'is clicked!'
//            });
//        });

//        $('#toggle_1').click(function (){
//            alert("Is clicked!");
//            //'Toggle ' + $(arrOfToggles).attr("id") + 'is clicked!'
//        });



//        var outputArrInConsole = function() {
//            console.log(arrOfToggles);
//        };
//



//        var clickOnToggle = $.each(arrOfToggles, function(){
//            $(this).click(function (){
//                alert("Is clicked!");
//            //'Toggle ' + $(arrOfToggles).attr("id") + 'is clicked!'
//            });
//        });

        return {
            clickOnToggle: clickOnToggle
//            outputArrInConsole: outputArrInConsole,
//            clickOnToggle: clickOnToggle
        };

    })();

    /* END */

//    manageLessonBlock.outputArrInConsole();
//    manageLessonBlock.clickOnToggle();

});
