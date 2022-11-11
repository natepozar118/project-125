noseX=0;
noseY=0;

function preload() {
    mustache = loadImage('https://www.bing.com/images/search?view=detailV2&ccid=wwRkjrtD&id=C80FE30B578AF12BB53DEF6038356DF613E75604&thid=OIP.wwRkjrtDueqcqnKk8yvz0AHaDx&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c304648ebb43b9ea9caa72a4f32bf3d0%3frik%3dBFbnE%252fZtNThg7w%26riu%3dhttp%253a%252f%252fwww.pngpix.com%252fwp-content%252fuploads%252f2016%252f05%252fPNGPIX-COM-Moustache-PNG-Image-14.png%26ehk%3dX2pYplKXRldXOrniN7XcM52uZ7WrccHGHOflCf%252bh8A8%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1021&expw=2000&q=mustache&simid=608036029529161189&FORM=IRPRST&ck=C8D8A627BFFC80D73A8F3792F053C05A&selectedIndex=28');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    Image(video, 0, 0, 300, 300);
    Fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20); 
    Image(mustache, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}
