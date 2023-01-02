noseX = 0;
noseY = 0;
function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/SNgF0kzr/clown-glasses-with-nose-eps-vectors-csp79446339.webp');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
}
function modelLoaded()
{
    console.log("poseNet is initialized");
}

function draw()
{
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 255, 0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX - 15, noseY - 15, 50, 50);
}
function take_snapshot()
{
    save("myimage.png");
}