/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
    
//        var btnTestObj = document.getElementById('btn_test');
//        
//        var hiddenContentObjObj = document.getElementById('hidden_content');
//        
//        var fullSizePhotoObj = document.getElementById('full_size_photo');
//        var moreInfoAbtDollObj = document.getElementById('more_info_abt_doll');
//        var formOrderObj = document.getElementById('form_order');
        
//        var handler = function(){
//            hiddenContentObjObj.style.display = 'block';
//        };
//        
//        btnTestObj.onclick = handler;

    var subLayerObj = document.getElementById('sub_layer');
    var blockMoreInfoObj = document.getElementById('more_info_block');
    var btnMoreInfoObj = document.getElementById('more_info_btn');
    var btnsHideMoreInfoObj = document.getElementsByClassName('hide-more-info-btn');
    var currShowPhotoObj = document.getElementById('curr_show_photo');
    var hiddenContentObj = document.getElementById('hidden_content');
    var btnCloseObj = document.getElementById('btn_close');
    var showHiddenBlockObj = document.getElementsByClassName('show-hidden-block');
    var fullSizePhotoObj = document.getElementById('full_size_photo');
    var moreInfoAbtDoll = document.getElementById('more_info_abt_doll');
    var btnChangedObj = false;

    function showSubLayer(){
        subLayerObj.style.display = 'block';
    };
    
    function hideSubLayer(){ 
        subLayerObj.style.display = 'none';
    }
    
    var showHiddenBlock = function(){
        
        showSubLayer();
        showBtnClose();
        hiddenContentObj.style.display = 'block';
        
    };
    
    function hideHiddenBlock(){
        hiddenContentObj.style.display = 'none';
    }
    
    var checkClassActiveElem = function(){
        
        /* NOT WORK! */
        
        switch(this.attributes['class'].value){
            case 'gallery-cource show-hidden-block':
                showBlockFullSizePhoto();
                break;
            case 'btn-more-info show-hidden-block':
                showMoreInfoAbtDoll();
                break;
        }
        
    };
    for (var i = 0; i < showHiddenBlockObj.length; i++) {
        
        showHiddenBlockObj[i].onclick = showHiddenBlock;
        showHiddenBlockObj[i].onclick = checkClassActiveElem;
        
    }
    
    function showBlockFullSizePhoto(){
        
        showSubLayer();
        showHiddenBlock();
        showBtnClose();
        fullSizePhotoObj.style.display = 'block';
        openSelectedPhoto();
        
    }
    
    function openSelectedPhoto(){
        alert(this.attributes['src'].value);
//        currShowPhotoObj.attributes['src'].value = this.attributes['src'].value;
    }
    
    
    function showMoreInfoAbtDoll(){
        
        showSubLayer();
        showHiddenBlock();
        showBtnClose();
        moreInfoAbtDoll.style.display = 'block';
        
    }
    
    
    var showMoreInfo = function(){ //Display block more info about course.
        
        blockMoreInfoObj.style.display = 'block';
        changeBtnMoreInfo();
        
    };
    btnMoreInfoObj.onclick = showMoreInfo;
    
    var hideMoreInfo = function(){
        
        blockMoreInfoObj.style.display = 'none';
        changeBtnMoreInfo();
        
    };
    for (var i = 0; i < btnsHideMoreInfoObj.length; i++) {
        btnsHideMoreInfoObj[i].onclick = hideMoreInfo;
    }
    
    function changeBtnMoreInfo(){
        
        if(btnChangedObj === false){
            btnMoreInfoObj.style.display = 'none';
            btnsHideMoreInfoObj[1].style.display = 'inline-block';//Change bottom button.
            btnChangedObj = true;
        }
        else{
            btnsHideMoreInfoObj[1].style.display = 'none';
            btnMoreInfoObj.style.display = 'inline-block';
            btnChangedObj = false;
        }
        
    }
    
    var closeWindow = function(){
        
        hideHiddenBlock();
        hideBtnClose();
        hideSubLayer();
        
    };
    subLayerObj.onclick = closeWindow;
    btnCloseObj.onclick = closeWindow;
    
    var subLayerObjHover = function(){
        
        subLayerObj.style.cursor = 'pointer';
        btnCloseObj.style.opacity = '1';
        
    };
    subLayerObj.onmouseover = subLayerObjHover;
    
    var subLayerObjOut = function(){
        btnCloseObj.style.opacity = '0.5';
    };
    subLayerObj.onmouseout = subLayerObjOut;
    
    function showBtnClose(){
        btnCloseObj.style.display = 'inline-block';
    }
    
    function hideBtnClose(){
        btnCloseObj.style.display = 'none';
    }
    
    
    
    
    
    
//                //collectOfBtnsElem[1] is <span class="more-info-btn> element
    
//    showSubLayer();
    
//    function setVisibilityHandler() {
//        
//        var collectOfBtnsElem = document.getElementsByClassName('set-visibility');
//        var blockMoreInfoObj = document.getElementById('more-info-block');
//        var flag = false;
//        
//        var handler = function() {
//            
//            if(flag === false){
//                blockMoreInfoObj.style.display = 'block';
//                window.scrollTo(0, 1044);
//                flag = true;
//            }
//            else{
//                blockMoreInfoObj.style.display = 'none';
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
//        var currShowPhotoObj = document.getElementById('curr_show_photo');
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
//                currShowPhotoObj.attributes['src'].value = this.attributes['src'].value;
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
//        var btnMoreInfoObj = document.getElementsByClassName('btn-more-info');
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
//        for (var i = 0; i < btnMoreInfoObj.length; i++) {
//            btnMoreInfoObj[i].onclick = handler;
//        }
//        
//
//    }
//    setMoreInfoHandler();
    
    
};    


