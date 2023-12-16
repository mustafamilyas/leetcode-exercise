func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false;
    }
    counter := make([]int, 26)

    for i, val := range s {
        counter[val - 97]++;
        counter[t[i] - 97]--;
    }

    for _, val := range counter {
        if val != 0 {
            return false;
        }
    }
    return true;
}