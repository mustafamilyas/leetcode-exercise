const MINUTES_24 = 24 * 60;
function findMinDifference(timePoints: string[]): number {
    let min = Number.MAX_SAFE_INTEGER;
    const minutes = timePoints.map(convertToMinutes);
    minutes.sort((a, b)=>a - b);
    for(let i = 1; i < minutes.length; i++) {
        min = Math.min(min, minutes[i] - minutes[i - 1])
    }
    return Math.min(min, minutes[0] - 0 + MINUTES_24 - minutes[minutes.length - 1])
};
function convertToMinutes(timepoint: string) {
    const [hours, minutes] = timepoint.split(":")
    return parseInt(hours) * 60 + parseInt(minutes)
}