/**
 * Created by Administrator on 2016/3/10.
 */
var $ = function (id){
    return document.getElementById(id);
};

//清空所有的class="now"，设置当前聚焦的dot
function clearClassNow(obj){
    for(var i = 0;i < dotList.childNodes.length;i++){
        dotList.childNodes[i].setAttribute('class','');
    }
    obj.setAttribute('class','now');
}

//得到img列表对象
var imgList = $('img_list');
//得到dot列表对象
var dotList = $('dot_list');
//每个图片的宽度
var imgWidth = 500;
//图片切换间隔
var changeSpace = 3000;
var interval2;

//dot被点击后切换img
function getIndex(_this){
    clearInterval(interval2);

    var index = _this.getAttribute('data-index');
    imgList.style.left = (-imgWidth*index) + 'px';

    clearClassNow(_this);

    /**如果dot被click了，计算ul的位置，下一次切换从被点击的dot起第二张，即清除定时器*/
    clearInterval(interval);

    /**继续执行自动切换效果*/
    var newImgIndex = index;
    interval2 = setInterval(function (){
        newImgIndex++;
        if(newImgIndex >= 5){
            newImgIndex = 0;
        }
        imgList.style.left = (-imgWidth*newImgIndex) + 'px';
        clearClassNow(dotList.childNodes[newImgIndex]);
    }, changeSpace);


}

//setInterval()实现自动切换效果
var imgIndex = 0;
var interval = setInterval(function (){
    clearInterval(interval2);

    imgIndex++;
    if(imgIndex >= 5){
        imgIndex = 0;
    }

    imgList.style.left = (-imgWidth*imgIndex) + 'px';

    //console.log(imgIndex);

    clearClassNow(dotList.childNodes[imgIndex]);


}, changeSpace);




