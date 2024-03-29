class PlayerShip {
    constructor() {
        this.x = width / 2;
        this.y = 0;
        this.xdir = 0;

        this.shipWidth = 60;
        this.shipHeight = 60;

        this.lives = 3;
    }

    render() {
        this.checkBounds();
        image(
            playerShipImage,
            this.x,
            height - this.shipHeight,
            this.shipWidth,
            this.shipHeight
        );
    }

    move(dir) {
        this.x += this.xdir;
    }

    setDir(dir) {
        this.xdir = dir;
    }

    checkBounds() {
        this.logPosition();
        if (this.x < 0) {
            this.x = 0;
        }

        if (this.x > width - this.shipWidth) {
            this.x = width - this.shipWidth;
        }
    }

    intersects(invader) {
        if (invader.y > height - this.shipHeight * 2) {
            background(255, 193, 23);
        }
    }

    logPosition() {
        console.log('x value: ' + this.x);
    }
}
