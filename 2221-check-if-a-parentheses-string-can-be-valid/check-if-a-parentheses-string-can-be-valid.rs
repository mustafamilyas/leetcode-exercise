impl Solution {
    pub fn can_be_valid(s: String, locked: String) -> bool {
        if s.len() % 2 == 1 {
            return false;
        }
        let mut open_stack: Vec<usize> = vec![];
        let mut u_stack: Vec<usize> = vec![];

        for (i, locked_char) in locked.chars().enumerate() {
            let ui = i as usize;
            if locked_char == '0' {
                u_stack.push(ui);
            } else if s.as_bytes()[ui] == b'(' {
                open_stack.push(ui);
            } else {
                if !open_stack.is_empty() {
                    open_stack.pop();
                } else if !u_stack.is_empty() {
                    u_stack.pop();
                } else {
                    return false;
                }
            }
        }

        while
            open_stack.len() > 0 &&
            u_stack.len() > 0 &&
            open_stack[open_stack.len() - 1] < u_stack[u_stack.len() - 1] 
        {
            open_stack.pop();
            u_stack.pop();
        }
        open_stack.is_empty()
    }
}
// ((((**))