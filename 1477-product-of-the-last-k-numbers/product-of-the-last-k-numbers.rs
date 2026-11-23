struct ProductOfNumbers {
    cache: Vec<i32>,
    length: usize,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl ProductOfNumbers {

    fn new() -> Self {
        Self {
            cache: vec![],
            length: 0,
        }
    }
    
    fn add(&mut self, num: i32) {
        self.length += 1;
        if num == 0 {
            self.cache = vec![];
        } else {
            let n = self.cache.len();
            let prev = self.cache.get(n - 1).copied().unwrap_or(1);
            self.cache.push(prev * num);
        }
    }
    
    fn get_product(&self, k: i32) -> i32 {
        let n = self.cache.len();
        let k: usize = k.try_into().unwrap();
        if k > n {
            return 0;
        }
        let prev = self.cache.get(n - 1).copied().unwrap_or(1);
        let prev_k = self.cache.get(n - 1 - k).copied().unwrap_or(1);
        prev / prev_k
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * let obj = ProductOfNumbers::new();
 * obj.add(num);
 * let ret_2: i32 = obj.get_product(k);
 */