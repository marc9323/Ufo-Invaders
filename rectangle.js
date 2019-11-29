class Rectangle {
    intersects(other) {
        console.log('Rectangle class intersect hit');
        let left = this.x;
        let right = this.x + this.width;
        let top = this.y;
        let bottom = this.y + this.height;

        let oleft = other.x;
        let oright = other.x + other.w;
        let otop = other.y;
        let obottom = other.y + other.h;

        return !(
            left >= oright ||
            right <= oleft ||
            top >= obottom ||
            bottom <= otop
        );
    }
}
