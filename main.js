function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(200,200);

    canvas=createCanvas(500,500);
    canvas.position(800,200);
    
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",getposes);
}

function draw(){
    background("#f3d2c1");
    
}

function modelLoaded(){
    console.log("Yay! You did it! ");
}

function getposes(results){
    if (results.length > 0){
        console.log(results);
    }
}