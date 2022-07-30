function upDate(previewPic){
  document.getElementById("image") = ("Styling with a Bandana");
    }

    function unDo(){

    }

var obj;

function upDate(previewPic){

    document.getElementById('image').innerHTML=previewPic.alt;
    document.getElementById('image').style.background="url('"+previewPic.src+"')";
    }

function unDo(){
    document.getElementById('image').innerHTML=oldAlt;
    document.getElementById('image').style.background='#8e68ff';
    document.getElementById('image').style.backgroundImage="url('')";
    }


    