let backgroundImage; // 800 x 600 background space
let playerShipImage; // 60 x 60 spaceship image
let invaderImage; // ufo.png 56 x 56
let bulletImage; // bullet.png 28 x 19

let bulletSound; // laser.wav
let gameSong;
let hitSound;

let playerShip;

let bullets = [];
let invaders = [];

let score = 0;

const GAME_OVER = 0;
const IN_GAME = 1;
const START_UP = 2;

let gameState = START_UP;

function preload() {
    backgroundImage = loadImage('space1.png');
    playerShipImage = loadImage('ship.png');
    invaderImage = loadImage('ufo.png');
    bulletImage = loadImage('bullet.png');

    gameSong = loadSound('music.ogg');
    bulletSound = loadSound('laser.wav');
    hitSound = loadSound('expl-invader-hit.wav');
}

function resetGame() {
    playerShip = new PlayerShip();

    // create a row of new invaders and give them x and y positions
    for (let i = 0; i < 6; i++) {
        invaders[i] = new Invader(i * 80 + 80, 20);
    }

    //gameSong.loop();
}

function setup() {
    createCanvas(800, 600);

    resetGame();
}

function draw() {
    // switch (gameState) {
    //     case START_UP:
    //         console.log('START GAME');
    //         textSize(96);
    //         text('Click Mouse to Begin Game!');
    //         break;
    // }
    image(backgroundImage, 0, 0);
    playerShip.render();
    playerShip.move();

    if (bullets.length >= 1) {
        for (var i = 0; i < bullets.length; i++) {
            bullets[i].render();
            bullets[i].move();

            for (var j = 0; j < invaders.length; j++) {
                if (bullets[i].intersects(invaders[j])) {
                    bullets[i].kill();
                    invaders[j].kill();
                    hitSound.play();
                    //console.log('hit');
                }
            }
        }
    }

    // render and move invaders
    // check for edge and shift down

    let edge = false;

    for (let i = 0; i < invaders.length; i++) {
        invaders[i].render();
        invaders[i].move();

        if (
            invaders[i].x > width - invaders[i].invaderWidth ||
            invaders[i].x < 0
        ) {
            edge = true;
        }
    }

    if (edge) {
        for (let i = 0; i < invaders.length; i++) {
            invaders[i].shiftDown();
        }
    }

    // clean up spent bullets and hit invaders
    for (var i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].dead) {
            bullets.splice(i, 1);
            //console.log('spliced bullet');
        }
    }

    for (var i = invaders.length - 1; i >= 0; i--) {
        if (invaders[i].dead) {
            invaders.splice(i, 1);
            //console.log('spliced invader');
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        let bullet = new Bullet(playerShip.x + 15, height - 60);
        bullets.push(bullet);
        bulletSound.play();
    }
    if (keyCode === RIGHT_ARROW) {
        playerShip.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        playerShip.setDir(-1);
    }
}

function keyReleased() {
    if (key != ' ') {
        playerShip.setDir(0);
    }
}
