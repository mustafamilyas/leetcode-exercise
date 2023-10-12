function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCounter = new Map<string, number>();
    for(const char of magazine) {
        charCounter.set(char, (charCounter.get(char) ?? 0) + 1)
    }
    for(const char of ransomNote) {
        if(!charCounter.get(char)) return false;
        charCounter.set(char, charCounter.get(char) - 1)
    }
    return true;
};