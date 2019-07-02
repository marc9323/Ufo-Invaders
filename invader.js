class Invader {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.xdir = 1;

        this.invaderHeight = 56;
        this.invaderWidth = 56;

        this.dead = false;
    }

    render() {
        image(invaderImage, this.x, this.y);
    }

    move() {
        this.x += this.xdir;
    }

    shiftDown() {
        this.xdir *= -1;
        this.y += this.invaderHeight;
    }

    kill() {
        this.dead = true;
    }
}
