status="";
obj_name="";
function preload(){

}

function setup(){
canvas=createCanvas( 430 , 300 );
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video , 0 , 0 , 430 , 300);
}

function Start(){
objectDetector=ml5.objectDetector("cocossd" , modelLoaded);
obj_name=document.getElementById("obj_name").value;
document.getElementById("status").innerHTML="Detecting Objects";
}
function modelLoaded(){
    console.log("Model is Loaded");
}