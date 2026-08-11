let capture;
let poseNet;
let noseX,noseY;
let learX,learY;
let rearX,rearY;
let leyeX,leyeY;
let reyeX,reyeY;
let singlePose,skeleton;
let actress_img;
function setup(){
    createCanvas(800,500);
    capture=createCapture(VIDEO);
    capture.size(800,500);
    capture.hide();
    poseNet=ml5.poseNet(capture,modelLoaded);
    poseNet.on('pose',receivedPoses);
    actress_img=loadImage('images/shraddhapic.webp');
}
function receivedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
        //noseX=singlePose.nose.x;
        //noseY=singlePose.nose.y;
        //learX=singlePose.leftEar.x;
        //learY=singlePose.leftEar.y;
        //rearX=singlePose.rightEar.x;
        //rearY=singlePose.rightEar.y;
        //leyeX=singlePose.leftEye.x;
        //leyeY=singlePose.leftEye.y;
        //reyeX=singlePose.rightEye.x;
        //reyeY=singlePose.rightEye.y;
    }
    console.log(noseX + " " + noseY);
}
function modelLoaded(){
    console.log("Model has loaded");
}
function draw(){
    image(capture,0,0,800,500);
    fill(0,255,0);
    if(singlePose){
    for(let i=0;i<singlePose.keypoints.length;i++){
       ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20);
    }
    stroke(255,255,255);
    strokeWeight(5);
    for(let j=0;j<skeleton.length;j++){
        line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,
            skeleton[j][1].position.y
        )
    }
    image(actress_img,singlePose.nose.x-100,singlePose.nose.y-120,200,200);
}
}