nose_x=0;
nose_y=0;
function preload() {
    clown_nose_img=loadImage("https://i.postimg.cc/26RRDM7m/clownsnase-vinyl-rote-kunststoff-clown-nase-faschingsnase-karnevals-zubehoer-horrorclown-nase-1.png");

}

function setup(){
    console.log("inside_setup");
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is intialized');
}

function draw(){
    image(video,0,0,300,300);
    // fill("red");
    // stroke("red");
    // circle(nose_x,nose_y,20);
    image(clown_nose_img,nose_x-5,nose_y-5,20,25);
}

function take_sanpshot(){
    save("myFilterImage.png");
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x = " +nose_x);
        console.log("nose y = " +nose_y);
    }
}

