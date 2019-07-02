class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 28;
        this.height = 19;

        this.speed = 2;
        this.dead = false;
    }

    render() {
        image(bulletImage, this.x, this.y);
    }

    move() {
        this.y -= this.speed;
    }

    kill() {
        this.dead = true;
    }

    intersects(invader) {
        let left = this.x;
        let right = this.x + this.width;
        let top = this.y;
        let bottom = this.y + this.height;

        let oleft = invader.x;
        let oright = invader.x + invader.invaderWidth;
        let otop = invader.y;
        let obottom = invader.y + invader.invaderHeight;

        return !(
            left >= oright ||
            right <= oleft ||
            top >= obottom ||
            bottom <= otop
        );
    }
}
