impl Solution {
    pub fn lexical_order(n: i32) -> Vec<i32> {
        let mut number_generator = NumberGenerator::new(n);
        number_generator.gen() 
    }
}

struct NumberGenerator {
    number: Vec<i32>,
    max_num: i32
}

impl NumberGenerator {
    pub fn new(n: i32) -> Self {
        Self {
            number: vec![],
            max_num: n
        }
    }

    pub fn gen(&mut self) -> Vec<i32> {
        for i in 1..=9 {
            if i > self.max_num || self.number.len() as i32 == self.max_num {
                break;
            }
            self.number.push(i);
            self.gen_next(i * 10);
        }
        self.number.clone()
    }

    pub fn gen_next(&mut self, s: i32) {
        for i in 0..=9 {
            let si = s + i;
            if si > self.max_num || self.number.len() as i32 == self.max_num {
                break;
            }
            self.number.push(si);
            self.gen_next(si * 10);
        }
    }
}

/**
1 10 11 12 13 
2
3
4
5
6
7
8
9
*/