/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
    
//        var btnTestObj = document.getElementById('btn_test');
//        
//        var hiddenContentObj = document.getElementById('hidden_content');
//        
//        var fullSizePhotoObj = document.getElementById('full_size_photo');
//        var moreInfoAbtDollObj = document.getElementById('more_info_abt_doll');
//        var formOrderObj = document.getElementById('form_order');
        
//        var handler = function(){
//            hiddenContentObj.style.display = 'block';
//        };
//        
//        btnTestObj.onclick = handler;

    var subLayer = document.getElementById('sub_layer');
    var blockMoreInfo = document.getElementById('more_info_block');
    var btnMoreInfo = document.getElementById('more_info_btn');
    var btnsHideMoreInfo = document.getElementsByClassName('hide-more-info-btn');
    var btnChanged = false;

    function showSubLayer(){
        subLayer.style.display = 'block';
    };
    
    function hideSubLayer(){
        subLayer.style.display = 'none';
    }
    
    var showMoreInfo = function(){ //Display block more info about course.
        blockMoreInfo.style.display = 'block';
        changeBtnMoreInfo();
    };
    btnMoreInfo.onclick = showMoreInfo;
    
    var hideMoreInfo = function(){
        blockMoreInfo.style.display = 'none';
        changeBtnMoreInfo();
    };
    for (var i = 0; i < btnsHideMoreInfo.length; i++) {
        btnsHideMoreInfo[i].onclick = hideMoreInfo;
    }
    
    function changeBtnMoreInfo(){
        
        if(btnChanged === false){
            btnMoreInfo.style.display = 'none';
            btnsHideMoreInfo[1].style.display = 'inline-block';//Change bottom button.
            btnChanged = true;
        }
        else{
            btnsHideMoreInfo[1].style.display = 'none';
            btnMoreInfo.style.display = 'inline-block';
            btnChanged = false;
        }
    }
    
    
    
    
//                //collectOfBtnsElem[1] is <span class="more-info-btn> element
    
//    showSubLayer();
    
//    function setVisibilityHandler() {
//        
//        var collectOfBtnsElem = document.getElementsByClassName('set-visibility');
//        var blockMoreInfo = document.getElementById('more-info-block');
//        var flag = false;
//        
//        var handler = function() {
//            
//            if(flag === false){
//                blockMoreInfo.style.display = 'block';
//                window.scrollTo(0, 1044);
//                flag = true;
//            }
//            else{
//                blockMoreInfo.style.display = 'none';
//                flag = false;
//            }
//        };
//        
//        for (var i = 0; i < collectOfBtnsElem.length; i++) {
//            collectOfBtnsElem[i].onclick = handler;
//        }
//    };
//    setVisibilityHandler();
//    
//    function setShowFullPhotoHandler(){
//        
//        var collectPhotoCource = document.getElementsByClassName('gallery-cource');
//        var crossBtn = document.getElementById('btn_cross');
//        var blockDarkBackground = document.getElementsByClassName('block-dark-background');
//        var posFullPhoto = document.getElementsByClassName('pos-full-photo');
//        var currShowPhoto = document.getElementById('curr_show_photo');
//        var bodyTag = document.getElementsByTagName('body');
//        var flag = false;
//        var pageYCoord = 0;
//        
//        var handler = function() {
//            
//            if(flag === false){
//                pageYCoord = window.pageYOffset;
//                blockDarkBackground[0].style.marginTop = pageYCoord + 'px';
//                blockDarkBackground[0].style.display = 'block';
//                posFullPhoto[0].style.marginTop = pageYCoord + 250 + 'px';
//                posFullPhoto[0].style.display = 'block';
////                bodyTag[0].style.overflow = 'hidden';
//                currShowPhoto.attributes['src'].value = this.attributes['src'].value;
//                flag = true;
//            }
//            else{
//                blockDarkBackground[0].style.display = 'none';
//                posFullPhoto[0].style.display = 'none';
//                bodyTag[0].style.overflow = 'auto';
//                flag = false;
//            }
//        };
//        
//            crossBtn.onclick = handler;
//        
//        for (var i = 0; i < collectPhotoCource.length; i++) {
//            collectPhotoCource[i].onclick = handler;
//        }
//    }
//    setShowFullPhotoHandler();
//    
//    function setMoreInfoHandler(){
//        
//        var mavkaPhotoArray = [
//            'img/mavka/mavka1.jpg',
//            'img/mavka/mavka2.jpg',
//            'img/mavka/mavka3.jpg',
//            'img/mavka/mavka4.jpg',
//            'img/mavka/mavka5.jpg'];
//        var mavkaPreviewArray = [
//            'img/mavka/mavka1-cut.jpg',
//            'img/mavka/mavka2-cut.jpg',
//            'img/mavka/mavka3-cut.jpg',
//            'img/mavka/mavka4-cut.jpg',
//            'img/mavka/mavka5-cut.jpg'];
//        
//        var mermaidPhotoArray = [
//            'img/mermaid/mermaid1.jpg',
//            'img/mermaid/mermaid2.jpg',
//            'img/mermaid/mermaid3.jpg',
//            'img/mermaid/mermaid4.jpg',
//            'img/mermaid/mermaid5.jpg'];
//        var mermaidPreviewArray = [
//            'img/mermaid/mermaid1-cut.jpg',
//            'img/mermaid/mermaid2-cut.jpg',
//            'img/mermaid/mermaid3-cut.jpg',
//            'img/mermaid/mermaid4-cut.jpg',
//            'img/mermaid/mermaid5-cut.jpg'];
//        
//        var fenrirPhotoArray = [
//            'img/fenrir/fenrir1.jpg',
//            'img/fenrir/fenrir2.jpg',
//            'img/fenrir/fenrir3.jpg',
//            'img/fenrir/fenrir4.jpg',
//            'img/fenrir/fenrir5.jpg'];
//        var fenrirPreviewArray = [
//            'img/fenrir/fenrir1-cut.jpg',
//            'img/fenrir/fenrir2-cut.jpg',
//            'img/fenrir/fenrir3-cut.jpg',
//            'img/fenrir/fenrir4-cut.jpg',
//            'img/fenrir/fenrir5-cut.jpg'];
//
//        var btnMoreInfo = document.getElementsByClassName('btn-more-info');
//        var blockDarkBackground = document.getElementsByClassName('block-dark-background');
//        var bodyTag = document.getElementsByTagName('body');
//        var posMoreInfo = document.getElementsByClassName('pos-more-info');
//        var crossBtn1 = document.getElementById('btn_cross1');
//        
//        var flag;
//        var pageYCoord = 0;
//        
//        var imgNodeList = document.getElementsByClassName('img-preview');
//        var currSelectPhoto = document.getElementById('curr_select_photo');
//        
//        var switchPhotoHandler = function() {
//            var oldPath = this.attributes['src'].value;
//            var newPath = oldPath.replace("-cut", "");
//            currSelectPhoto.attributes['src'].value = newPath;
//        };
//
//        for (var i = 0; i < imgNodeList.length; i++) {
//            imgNodeList[i].onclick = switchPhotoHandler;
//        };
//            
//        var handler = function() {
//            
//            if(flag === false){
//                pageYCoord = window.pageYOffset;
//                blockDarkBackground[0].style.marginTop = pageYCoord + 'px';
//                blockDarkBackground[0].style.display = 'block';
//                posMoreInfo[0].style.marginTop = pageYCoord + 30 + 'px';
//                posMoreInfo[0].style.display = 'block';
//                bodyTag[0].style.overflow = 'hidden';
//
//                var idDoll = this.attributes['id'].value;
//                
//                switch(idDoll) {
//                    case 'mavka':
//                        currSelectPhoto.attributes['src'].value = mavkaPhotoArray[0];
//                        for (var i = 0; i < imgNodeList.length; i++) {
//                                imgNodeList[i].attributes['src'].value = mavkaPreviewArray[i];
//                            };
//                        break;
//                    case 'mermaid':
//                        currSelectPhoto.attributes['src'].value = mermaidPhotoArray[0];
//                        for (var i = 0; i < imgNodeList.length; i++) {
//                                imgNodeList[i].attributes['src'].value = mermaidPreviewArray[i];
//                            };
//                        break;
//                    case 'fenrir':
//                        currSelectPhoto.attributes['src'].value = fenrirPhotoArray[0];
//                        for (var i = 0; i < imgNodeList.length; i++) {
//                                imgNodeList[i].attributes['src'].value = fenrirPreviewArray[i];
//                            };
//                        break;
//                } 
//                flag = true;
//            }
//            else{
//                blockDarkBackground[0].style.display = 'none';
//                posMoreInfo[0].style.display = 'none';
//                bodyTag[0].style.overflow = 'auto';
//                flag = false;
//            }
//        };
//        
//        crossBtn1.onclick = handler;
//        
//        for (var i = 0; i < btnMoreInfo.length; i++) {
//            btnMoreInfo[i].onclick = handler;
//        }
//        
//
//    }
//    setMoreInfoHandler();
    
    
};    


