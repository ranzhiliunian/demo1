//页面加载完毕后执行
window.onload = function(){
    var objDemo = document.getElementById('demo'); //最大的容器盒子
    var objsmallbox = document.getElementById('small-box'); //小图片容器
    var objfloatbox = document.getElementById('float-box'); //放大镜
    var objbigbox = document.getElementById('big-box'); //大图片容器
    var objbigboximage = objbigbox.getElementsByTagName('img')[0]; //大图片


    objsmallbox.onmouseover = function(){
        objfloatbox.style.display = 'block';
        objbigbox.style.display = 'block';
    }
    objsmallbox.onmouseout = function(){
        objfloatbox.style.display = 'none';
        objbigbox.style.display = 'none';
    }

    objsmallbox.onmousemove = function(ev){
        var _value = ev;
        var left = _value.clientX - objDemo.offsetLeft - objsmallbox.offsetLeft - objfloatbox.offsetWidth/2;
        var top = _value.clientY - objDemo.offsetTop - objsmallbox.offsetTop - objfloatbox.offsetHeight/2;
        
        if(left<0){
            left = 0;
        }else if(left>(objsmallbox.offsetWidth - objfloatbox.offsetWidth)){
            left = objsmallbox.offsetWidth - objfloatbox.offsetWidth;
        }
        if(top<0){
            top = 0;
        }else if(top>(objsmallbox.offsetHeight - objfloatbox.offsetHeight)){
            left = objsmallbox.offsetHeight - objfloatbox.offsetHeight;
        }

        objfloatbox.style.left = left+'px';
        objfloatbox.style.top = top+'px';

        var percentx = left/(objsmallbox.offsetWidth - objfloatbox.offsetWidth);
        var percenty = top/(objsmallbox.offsetHeight - objfloatbox.offsetHeight);
        objbigboximage.style.left = -percentx*(objbigboximage.offsetWidth - objbigbox.offsetWidth)+"px";
        objbigboximage.style.top = -percenty*(objbigboximage.offsetHeight - objbigbox.offsetHeight)+"px";
    }
}