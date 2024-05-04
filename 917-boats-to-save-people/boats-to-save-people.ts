function numRescueBoats(people: number[], limit: number): number {
    people.sort((a,b)=>a-b);
    let boat = 0;
    let left = 0;
    let right = people.length - 1;

    while(left <= right) {
        boat++;
        // only two people can be onboard at one time
        // if weight more than limit then only one person
        if(people[left] + people[right] <= limit) left++
        right--;
    }

    return boat;
};