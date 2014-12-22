/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {        
    function setVisibilityHandler(sourceInFirst, sourceInSec, targetIn) {
        var sourceNodeFirst = document.getElementById(sourceInFirst);
        var sourceNodeSecond = document.getElementById(sourceInSec);
        var targetNode = document.getElementById(targetIn);
        var flag = false;
        var handler = function() {
            if(flag === false){
                targetNode.style.display = 'block';
                sourceNodeFirst.innerHTML = 'Скрыть ↑';
                flag = true;
            }
            else{
                targetNode.style.display = 'none';
                sourceNodeFirst.innerHTML = 'Подробнее о курсе ↓';
                flag = false;
            }
        };
        sourceNodeFirst.onclick = handler;
        sourceNodeSecond.onclick = handler;
    };
    setVisibilityHandler('more-info-btn','right-btn-hide','more-info-block');
};    


