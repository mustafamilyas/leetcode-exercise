function compareVersion(version1: string, version2: string): number {
    const version1Array = versionTrimAndSplit(version1);
    const version2Array = versionTrimAndSplit(version2);
    const minLength = Math.min(version1Array.length, version2Array.length)
    for(let i = 0; i < minLength; i++) {
        if(version1Array[i] > version2Array[i]) return 1
        if(version1Array[i] < version2Array[i]) return -1
    }
    if(version1Array.length > version2Array.length) return 1;
    if(version1Array.length < version2Array.length) return -1;
    return 0
};

function versionTrimAndSplit(version: string): number[] {
    const versionSplitted = version.split('.').map((e)=>parseInt(e));
    let i = versionSplitted.length - 1;
    for(; i >= 0; i--) {
        if(versionSplitted[i]) break;
    }
    return versionSplitted.slice(0, i + 1);
}

