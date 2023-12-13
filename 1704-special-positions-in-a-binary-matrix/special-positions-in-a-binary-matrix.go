func numSpecial(mat [][]int) int {
    special := 0;

    for row, rowValue := range mat {
        oneIndex := -1;
        for col, colValue := range rowValue {
            if colValue == 1 {
                if oneIndex == - 1 {
                    oneIndex = col
                } else {
                    oneIndex = -1;
                    break
                }
            }
        }

        if oneIndex > -1 {
            valid := true
            for _row, _rowValue := range mat {
                if (_row != row && _rowValue[oneIndex] == 1) {
                    valid = false;
                    break
                }
            }

            if valid {
                special ++
            }
        }
    }

    return special
}