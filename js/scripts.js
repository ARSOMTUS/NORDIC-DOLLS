/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {        
    function setVisibilityHandler(sourceIn, targetIn) {
        var sourceNode = document.getElementById(sourceIn);
        var targetNode = document.getElementById(targetIn);
        var flag = false;
        var handler = function() {
            if(flag === false){
                targetNode.style.display = 'block';
                sourceNode.innerHTML = 'Скрыть ↑';
                flag = true;
            }
            else{
                targetNode.style.display = 'none';
                sourceNode.innerHTML = 'Подробнее о курсе ↓';
                flag = false;
            }
        };
        sourceNode.onclick = handler;
    };
    setVisibilityHandler('more-info-btn','more-info-block');
};    


