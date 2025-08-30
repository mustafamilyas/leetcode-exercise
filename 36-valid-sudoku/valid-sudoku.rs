use std::collections::HashSet;

impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let mut row_checks: Vec<HashSet<char>> = vec![HashSet::new(); 9];
        let mut col_checks: Vec<HashSet<char>> = vec![HashSet::new(); 9];
        let mut box_checks: Vec<HashSet<char>> = vec![HashSet::new(); 9];

        for (row, row_content) in board.iter().enumerate() {
            for (col, value) in row_content.iter().enumerate() {
                if *value == '.' { continue }
                if row_checks[row].contains(value) {
                    return false;
                }
                row_checks[row].insert(*value);
                if col_checks[col].contains(value) {
                    return false;
                }
                col_checks[col].insert(*value);
                let box_idx = Self::get_box_index(row, col);
                if box_checks[box_idx].contains(value) {
                    return false;
                }
                box_checks[box_idx].insert(*value);
            }
        }
        true
    }

    pub fn get_box_index(row: usize, col: usize) -> usize {
        let col_index = if col < 3 { 0 } 
                        else if col < 6 { 1 } 
                        else {2};
        let row_index = if row < 3 { 0 } 
                        else if row < 6 { 1 } 
                        else { 2 };

        row_index * 3 + col_index  
    }
}