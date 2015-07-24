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

        var outputArrInConsole = function() {
            console.log(arrOfToggles);
        };

        return {
            outputArrInConsole: outputArrInConsole
        };

    })();

    /* END */

    manageLessonBlock.outputArrInConsole();
});
