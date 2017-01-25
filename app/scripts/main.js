var canvas;
var stage;
var w;
var bubbles = 40;
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

{

    // create a new stage and point it at our canvas:
    canvas = document.getElementById("testCanvas");
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    w = canvas.width;
    stage = new createjs.Stage(canvas);

    for (let b = 0; b < bubbles; b++) {
        let spriteSheet = new createjs.SpriteSheet({
            framerate: 60,
            "images": ["images/output.png"],
            "frames": {"height": 30, "width": 30},
            "animations": {
                "run": [0, 176],
                // "run": [0, 176, "stop"],
                // "stop": 176
            }
        });
        let bubble = new createjs.Sprite(spriteSheet, "run");
        bubble.y = parseInt(Math.random() * WINDOW_HEIGHT);
        bubble.x = parseInt(Math.random() * WINDOW_WIDTH);
        stage.addChild(bubble);
    }


    // start the tick and point it at the window so we can do some work before updating the stage:
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
    stage.update(event);
}