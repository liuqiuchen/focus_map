/**
 * Created by Administrator on 2016/3/10.
 */
var $ = function (id){
    return document.getElementById(id);
};

//得到img列表对象
var imgList = $('img_list');
//得到dot列表对象
var dotList = $('dot_list');
//每个图片的宽度
var imgWidth = 500;

function getIndex(_this){
    var index = _this.getAttribute('data-index');
    imgList.style.left = (-imgWidth*index) + 'px';

    for(var i = 0;i < dotList.childNodes.length;i++){
        dotList.childNodes[i].setAttribute('class','');
    }
    _this.setAttribute('class','now');

    //setInterval实现切换时的动画效果

}

//setInterval()实现自动切换效果
var imgIndex = 0;
setInterval(function (){
    imgIndex++;
    if(imgIndex >= 5){
        imgIndex = 0;
    }
    imgList.style.left = (-imgWidth*imgIndex) + 'px';
    console.log(imgIndex);
}, 3000);



































