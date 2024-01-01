function findContentChildren(childrenNeeds: number[], cookieSizes: number[]): number {
    cookieSizes.sort((a,b)=>a-b)
    childrenNeeds.sort((a,b)=>a-b)
    let childrenPointer = 0;
    let cookiePointer = 0;

    while(
        childrenPointer < childrenNeeds.length && 
        cookiePointer < cookieSizes.length
    ) {
        if(childrenNeeds[childrenPointer] <= cookieSizes[cookiePointer]) {
            childrenPointer++
        }
        cookiePointer++

    }
    return childrenPointer
};