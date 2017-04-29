var ops=document.getElementById('ps');
var lis=ops.children;
var winWidth=document.documentElement.clientWidth-450;
var winHeight=document.documentElement.clientHeight-300;

for(var i=0;i<lis.length;i++){
  var ranNum=parseInt(Math.random()*360);
  var x=parseInt( Math.random()*winWidth );
  var y=parseInt( Math.random()*winHeight );
  lis[i].style.transform='rotate('+ranNum+'deg)';
  lis[i].style.left= x +'px';
  lis[i].style.top= y +'px';;
  lis[i].onclick=function(){
    for(var i=0;i<lis.length;i++){
      lis[i].className='';
    }
    this.className='current';
  }
}
