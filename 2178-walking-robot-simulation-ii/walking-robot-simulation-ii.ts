const DIR = ['East', 'North', 'West', 'South']
class Robot {
    dir: number; // 0 east, 1 north, 2 west, 3 south
    w: number;
    h: number;
    x: number;
    y: number;
    pendingStep: number;
    roundtripStep: number;
    constructor(width: number, height: number) {
        this.dir = 0;
        this.w = width;
        this.h = height;
        this.x = 0;
        this.y = 0;
        this.pendingStep = 0;
        this.roundtripStep = (this.w + this.h - 2) * 2;
    }

    step(num: number): void {
        const total = this.pendingStep + num;
        this.pendingStep = total % this.roundtripStep;

        // Full loop is not the same as no movement
        if (this.pendingStep === 0 && num > 0) {
            this.pendingStep = this.roundtripStep;
        }
    }

    getPos(): number[] {
        this.move();
        return [this.x, this.y]
    }

    getDir(): string {
        this.move();
        return DIR[this.dir]
    }

    private move() {
        while(this.pendingStep > 0) {
            if(this.dir == 0) {
                const used = Math.min(this.pendingStep, this.w - this.x - 1);
                this.pendingStep -= used;
                this.x += used;
            } else if (this.dir == 1) {
                const used = Math.min(this.pendingStep, this.h - this.y - 1);
                this.pendingStep -= used;
                this.y += used;
            } else if (this.dir == 2) {
                const used = Math.min(this.pendingStep, this.x);
                this.pendingStep -= used;
                this.x -= used;
            } else {
                const used = Math.min(this.pendingStep, this.y);
                this.pendingStep -= used;
                this.y -= used;
            }

            if(this.pendingStep > 0) {
                this.dir = (this.dir + 1) % 4;
            }
        }
    }
}

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */