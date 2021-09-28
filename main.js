
function preload(){

}


function setup(){
var canvas= createCanvas(400,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
model=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cR5LXMH-Z/model.json',modelloaded);

}

function draw(){
    image(video,0,0,400,300);
    model.classify(video,gotresults);

}
function modelloaded(){
    console.log("model loaded");
}
function gotresults(error,results){
    if (error){
        console.error(error);
 }
 else {
     console.log(results);
     document.getElementById("objects").innerHTML=results[0].label;
     document.getElementById("accuracy?").innerHTML=results[0].confidence;
 }

}