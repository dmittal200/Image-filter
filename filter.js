var fgImage = null;
var fgCanvas;
var grayimage=null;

function loadImage() {
  var file = document.getElementById("fgfile");
  fgImage = new SimpleImage(file);
  grayimage=new SimpleImage(file);
  fgCanvas = document.getElementById("imageup");
  fgImage.drawTo(fgCanvas);
}

function makeGray(){
  if(isloaded(grayimage)){
  for(var pix of grayimage.values()){
    var avg=(pix.getRed()+pix.getBlue()+pix.getGreen())/3;
    pix.setRed(avg);
    pix.setGreen(avg);
    pix.setBlue(avg);
  }
  canvas=document.getElementById("imageup");
  grayimage.drawTo(canvas);}
}

function isloaded(tttt){
  if(tttt==null||!tttt.complete()){
    alert("didn't load");
    return false;
  }
  else{
    return true;
  }
}

function reset(){
  if(isloaded(fgImage)) {
  fgImage.drawTo(canvas); 
   grayimage=new SimpleImage(fgImage);
  }
}