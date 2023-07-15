class ParkingSystem {
    parking: Array<number>
    constructor(big: number, medium: number, small: number) {
        this.parking = [big, medium, small]
    }

    addCar(carType: number): boolean {
        const availableParking = this.parking[carType - 1];
        if(availableParking === 0) return false;
        this.parking[carType - 1]--;
        return true;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */