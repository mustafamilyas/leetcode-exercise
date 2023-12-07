func largestOddNumber(num string) string {
    chars  := strings.Split(num, "")
    for i := len(chars) - 1; i >= 0; i-- {
      charNum, err := strconv.Atoi(chars[i])
      if err != nil {
        return ""
      }
      if (charNum % 2) == 1 {
        return num[:i + 1]
      }
    }
    return ""   
}