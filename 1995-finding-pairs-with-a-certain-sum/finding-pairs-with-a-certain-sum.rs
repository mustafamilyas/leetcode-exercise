use std::collections::HashMap;

struct FindSumPairs {
    map1: HashMap<i32, i32>,
    map2: HashMap<i32, i32>,
    nums2: Vec<i32>,
} 
impl FindSumPairs {

    fn new(nums1: Vec<i32>, nums2: Vec<i32>) -> Self {
        let mut map1 = HashMap::new();
        let mut map2 = HashMap::new();
        for (key, &val) in nums1.iter().enumerate() {
            *map1.entry(val).or_insert(0) += 1;
        }
        for (key, &val) in nums2.iter().enumerate() {
            *map2.entry(val).or_insert(0) += 1;
        }
        Self {
            nums2,
            map1,
            map2
        }
    }
    
    fn add(&mut self, index: i32, val: i32) {
        if let Some(prev) = self.nums2.get_mut(index as usize) {
            let next = *prev + val;
            *self.map2.entry(*prev).or_insert(0) -= 1;
            *self.map2.entry(next).or_insert(0) += 1;
            *prev = next;
        }
    }
    
    fn count(&self, tot: i32) -> i32 {
        let mut res = 0;
        for (key, count) in self.map1.iter() {
            let pair = tot - key;
            if let Some(pair_count) = self.map2.get(&pair) {
                res += count * pair_count
            }
        }
        res
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * let obj = FindSumPairs::new(nums1, nums2);
 * obj.add(index, val);
 * let ret_2: i32 = obj.count(tot);
 */