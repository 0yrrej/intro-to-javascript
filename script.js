var dvdImage
function preload(){
    dvdImage = loadImage("dvdlogo.jpg")
}

function setup(){
    createCanvas(800, 600)
}

var xPos = 50
var yPos = 50
var xspeed = 10
var yspeed = 10
var backgroundColor = "blue"

function draw(){
    background(backgroundColor)    
    image(dvdImage, xPos, yPos, 100, 100)

    xPos = xPos + xspeed
    
    if (xPos > 700) {
        xspeed = xspeed * -1
        backgroundColor = "blue"
    }
    
    if (xPos < 0) {
        xspeed = xspeed * -1
        backgroundColor = "black"
    }
    
    yPos = yPos + yspeed
    
    if (yPos > 500) {
        yspeed = yspeed * -1
        backgroundColor = "green"
    }
    
    if (yPos < 0) {
        yspeed = yspeed * -1
        backgroundColor = "pink"
    }
}