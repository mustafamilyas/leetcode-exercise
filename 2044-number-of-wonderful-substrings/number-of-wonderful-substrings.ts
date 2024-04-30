function wonderfulSubstrings(word: string): number {
    let result = 0;
    let bitmap = 0;
    let bitmapFrequencies = new Map<number, number>();
    bitmapFrequencies.set(0, 1);

    for(let i = 0; i < word.length; i++) {
        bitmap ^= 1 << word.charCodeAt(i) - 97;
        result += bitmapFrequencies.get(bitmap) ?? 0;

        for(let j = 0; j < 10; j++)
            result += bitmapFrequencies.get(bitmap ^ 1 << j) ?? 0;

        bitmapFrequencies.set(bitmap, (bitmapFrequencies.get(bitmap) ?? 0) + 1);
    }

    return result;
};