var ball, ball1;
var database;
var Pos;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ball1 = createSprite(280, 250, 10, 10);
    ball1.shapeColor = "blue";

    database.ref('Ball/Position').on("value", (data)=>{
        Pos = data.val();
        ball1.x = Pos.x;
        ball1.y = Pos.y;
    })
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        updatePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updatePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updatePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updatePos(0,+1);
    }

    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function updatePos(x, y){
    database.ref('Ball/Position').update(
        { x : ball1.x + x, y : ball1.y + y}
    );
}