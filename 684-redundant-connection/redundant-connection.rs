impl Solution {
    pub fn find_redundant_connection(edges: Vec<Vec<i32>>) -> Vec<i32> {
        let size = if let Some(s)= edges.iter().flatten().copied().max() { s } else { 0 };
        let mut disjoin_set = UnionFind::new(size as usize);
        for edge in edges {
            if edge.len() < 2 {
                continue;
            }
            let x = (edge[0] - 1) as usize;
            let y = (edge[1] - 1) as usize;
            if disjoin_set.connected(x, y) {
                return edge;
            }
            disjoin_set.union(x, y);
        }
        vec![]
    }
}

struct UnionFind {
    parents: Vec<usize>,
    ranks: Vec<usize>
}

impl UnionFind {
    fn new(size: usize) -> Self {
        Self {
            parents: (0..size).collect(),
            ranks: vec![1; size]
        }
    }

    fn find(&mut self, index: usize) -> usize {
        if self.parents[index] != index {
            self.parents[index] = self.find(self.parents[index])
        }
        self.parents[index]
    }

    fn union(&mut self, x: usize, y: usize) {
        let root_x = self.find(x);
        let root_y = self.find(y);

        if root_x != root_y {
            if self.ranks[root_x] > self.ranks[root_y] {
                self.parents[root_y] = root_x;
            } else if self.ranks[root_x] < self.ranks[root_y] {
                self.parents[root_x] = root_y;
            } else {
                self.parents[root_y] = root_x;
                self.ranks[root_x] += 1;
            }
        }
    }

    fn connected(&mut self, x: usize, y: usize) -> bool {
        self.find(x) == self.find(y)
    }
}
