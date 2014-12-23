/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
    
    function setVisibilityHandler(classBtnsIn, blockIn) {
        
        var collectOfBtnsElem = document.getElementsByClassName(classBtnsIn);
        var blockMoreInfo = document.getElementById(blockIn);
        var flag = false;
        
        var handler = function() {
            
            if(flag === false){
                blockMoreInfo.style.display = 'block';
                window.scrollTo(0, 1044);
                collectOfBtnsElem[1].innerHTML = 'Скрыть ↑';
                //collectOfBtnsElem[1] is <span class="more-info-btn> element
                flag = true;
            }
            else{
                blockMoreInfo.style.display = 'none';
                collectOfBtnsElem[1].innerHTML = 'Подробнее о курсе ↓';
                flag = false;
            }
        };
        
        for (var i = 0; i < collectOfBtnsElem.length; i++) {
            collectOfBtnsElem[i].onclick = handler;
        }
    };
    setVisibilityHandler('set-visibility', 'more-info-block');
    
};    


