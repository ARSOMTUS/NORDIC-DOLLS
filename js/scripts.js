/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
    
    function setVisibilityHandler() {
        
        var collectOfBtnsElem = document.getElementsByClassName('set-visibility');
        var blockMoreInfo = document.getElementById('more-info-block');
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
    setVisibilityHandler();
    
    function setShowFullPhotoHandler(){
        
        var collectPhotoCource = document.getElementsByClassName('gallery-cource');
        var crossBtn = document.getElementById('btn_cross');
        var blockDarkBackground = document.getElementsByClassName('block-dark-background');
        var posFullPhoto = document.getElementsByClassName('pos-full-photo');
        var currShowPhoto = document.getElementById('curr_show_photo');
        var bodyTag = document.getElementsByTagName('body');
        var flag = false;
        var pageYCoord = 0;
        
        var handler = function() {
            
            if(flag === false){
                pageYCoord = window.pageYOffset;
                blockDarkBackground[0].style.marginTop = pageYCoord + 'px';
                blockDarkBackground[0].style.display = 'block';
                posFullPhoto[0].style.marginTop = pageYCoord + 250 + 'px';
                posFullPhoto[0].style.display = 'block';
                bodyTag[0].style.overflow = 'hidden';
                currShowPhoto.attributes['src'].value = this.attributes['src'].value;
                flag = true;
            }
            else{
                blockDarkBackground[0].style.display = 'none';
                posFullPhoto[0].style.display = 'none';
                bodyTag[0].style.overflow = 'auto';
                flag = false;
            }
        };
        
            crossBtn.onclick = handler;
        
        for (var i = 0; i < collectPhotoCource.length; i++) {
            collectPhotoCource[i].onclick = handler;
        }
    }
    setShowFullPhotoHandler();
    
        function setMoreInfoHandler(){
        
        var btnMoreInfo = document.getElementsByClassName('btn-more-info');
        var blockDarkBackground = document.getElementsByClassName('block-dark-background');
        var bodyTag = document.getElementsByTagName('body');
        var posMoreInfo = document.getElementsByClassName('pos-more-info');
        var crossBtn1 = document.getElementById('btn_cross1');
        var flag = false;
        var pageYCoord = 0;
        
        var handler = function() {
            
            if(flag === false){
                pageYCoord = window.pageYOffset;
                blockDarkBackground[0].style.marginTop = pageYCoord + 'px';
                blockDarkBackground[0].style.display = 'block';
                posMoreInfo[0].style.marginTop = pageYCoord + 30 + 'px';
                posMoreInfo[0].style.display = 'block';
                bodyTag[0].style.overflow = 'hidden';
//                currShowPhoto.attributes['src'].value = this.attributes['src'].value;
                flag = true;
            }
            else{
                blockDarkBackground[0].style.display = 'none';
                posMoreInfo[0].style.display = 'none';
                bodyTag[0].style.overflow = 'auto';
                flag = false;
            }
        };
        
        crossBtn1.onclick = handler;
        
        for (var i = 0; i < btnMoreInfo.length; i++) {
            btnMoreInfo[i].onclick = handler;
        }
    }
    setMoreInfoHandler();
};    


