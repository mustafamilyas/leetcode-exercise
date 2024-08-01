func countSeniors(details []string) int {
    senior := 0;
    for _, v := range details {
        if val, err := strconv.Atoi(v[11:13]); err == nil && val > 60 {
            senior ++
        }
    }
    return senior;
}