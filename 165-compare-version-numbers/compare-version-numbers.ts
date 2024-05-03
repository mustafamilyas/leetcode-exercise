function compareVersion(version1: string, version2: string): number {
    const version1Array = versionTrimAndSplit(version1);
    const version2Array = versionTrimAndSplit(version2);
    const minLength = Math.min(version1Array.length, version2Array.length)
    for(let i = 0; i < minLength; i++) {
        const a = parseInt(version1Array[i])
        const b = parseInt(version2Array[i])
        if(a > b) return 1
        if(a < b) return -1
    }
    if(version1Array.length > version2Array.length) return 1;
    if(version1Array.length < version2Array.length) return -1;
    return 0
};

function versionTrimAndSplit(version: string): string[] {
    const versionSplitted = version.split('.')
    let i = versionSplitted.length - 1;
    for(; i >= 0; i--) {
        if(parseInt(versionSplitted[i])) break;
    }
    return versionSplitted.slice(0, i + 1);
}

