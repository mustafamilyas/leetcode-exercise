use std::collections::HashSet;

impl Solution {
    pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
        let mut sudoku_solver = SudokuSolver::new(board);
        sudoku_solver.solve(0);
    }
}

const NINE: u32 = 57;
const ONE: u32 = 49;

struct SudokuSolver<'a> {
    board: &'a mut Vec<Vec<char>>,
    empty_values: Vec<(usize, usize)>,
    row_checks: Vec<HashSet<char>>,
    col_checks: Vec<HashSet<char>>,
    box_checks: Vec<HashSet<char>>,
}

impl<'a> SudokuSolver<'a> {
    pub fn new(board: &'a mut Vec<Vec<char>>) -> Self {
        let mut empty_values = vec![];
        let mut row_checks: Vec<HashSet<char>> = vec![HashSet::new(); 9];
        let mut col_checks: Vec<HashSet<char>> = vec![HashSet::new(); 9];
        let mut box_checks: Vec<HashSet<char>> = vec![HashSet::new(); 9];
        for row in 0..9 {
            for col in 0..9 {
                if board[row][col] == '.' {
                    empty_values.push((row, col));
                } else {
                    row_checks[row].insert(board[row][col]);
                    col_checks[col].insert(board[row][col]);
                    let box_index = Self::get_box_index(row, col);
                    box_checks[box_index].insert(board[row][col]);
                }
            }
        }
        Self {
            board,
            empty_values,
            row_checks,
            col_checks,
            box_checks
        }
    }

    pub fn solve(&mut self, idx: usize) -> bool {
        if idx == self.empty_values.len() {
            return true
        }
        let (row, col) = self.empty_values[idx];
        let box_index = Self::get_box_index(row, col);
        for value in ONE..=NINE {    
            let value_char = char::from_u32(value).unwrap();
            if !self.is_value_good(row, col, value) {
                continue
            }
            self.row_checks[row].insert(value_char);
            self.col_checks[col].insert(value_char);
            self.box_checks[box_index].insert(value_char);
            self.board[row][col] = value_char;
            if self.solve(idx + 1) {
                return true;
            }
            self.board[row][col] = '.';
            self.row_checks[row].remove(&value_char);
            self.col_checks[col].remove(&value_char);
            self.box_checks[box_index].remove(&value_char);
        }
        false
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

    pub fn is_value_good(&self, row: usize, col: usize, value: u32) -> bool {
        let box_index = Self::get_box_index(row, col);
        let value_char = char::from_u32(value).unwrap();
        !self.row_checks[row].contains(&value_char) && 
        !self.col_checks[col].contains(&value_char) && 
        !self.box_checks[box_index].contains(&value_char)
    }
}