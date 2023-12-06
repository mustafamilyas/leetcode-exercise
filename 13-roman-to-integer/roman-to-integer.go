var mapRomanToInt = map[string]int{
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

func romanToInt(s string) int {
    runS := []rune(s)
    sLen := len(runS)
    result := 0

    for i := sLen - 1; i >= 0; i-- {
        if i < sLen - 1 && mapRomanToInt[string(runS[i])] < mapRomanToInt[string(runS[i + 1])] {
            result = result - mapRomanToInt[string(runS[i])]
        } else {
            result = result + mapRomanToInt[string(runS[i])]
        }
    }

    return result;
}