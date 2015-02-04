/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$.getJSON("json/gallery-data.json", function (data) {
    $(document).ready(function () {
        $("#flavor_1").agile_carousel({
            carousel_data: data,
            carousel_outer_height: 400,
            carousel_height: 400,
            slide_height: 400,
            carousel_outer_width: 660,
            slide_width: 660,
            transition_time: 2000,
            timer: 5000,
            continuous_scrolling: true,
            control_set_1: "numbered_buttons",
            no_control_set: "hover_previous_button,hover_next_button"
        });
    });
});

