class Bomb {
    constructor(x, y) {
        this.bombWidth = 0; // width
        this.bombHeight = 0;

        this.speed = 3;
    }
// test
    render() {
        image(bullet, x, y);
    }

    move() {
        this.y -= speed;
    }
}
