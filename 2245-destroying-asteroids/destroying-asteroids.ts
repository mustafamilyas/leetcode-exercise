function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    asteroids.sort((a, b)=> a-b);
    for(const a of asteroids) {
        if(a > mass) return false;
        mass += a;
    }
    return true;
};