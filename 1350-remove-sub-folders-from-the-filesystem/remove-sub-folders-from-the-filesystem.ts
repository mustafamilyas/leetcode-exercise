function removeSubfolders(folder: string[]): string[] {
    const set = new Set(folder);
    const array = Array.from(set);
    array.sort()
    let i = 0, j = 1;
    while(j < array.length) {
        if(array[j].startsWith(array[i] + '/')) {
            set.delete(array[j])
            j++
        } else {
            i = j++
        }
    }
    return Array.from(set)
};
