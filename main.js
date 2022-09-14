nosex=0;
nosey=0;
function preload(){
 lipstick=("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotposes);
}
function modelLoaded(){
    console.log("pose net is initialize");
}
function draw(){
    image(video,0,0,300,300);
    image(lipstick,nosex-20,nosey-20,30,30);
}
function takeSnapshot(){
    save("my_image.png");
}
function gotposes(results){
    if (results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex);
        console.log("nosey= "+nosey);
        
    }
}
