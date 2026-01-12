impl Solution {
    pub fn min_time_to_visit_all_points(points: Vec<Vec<i32>>) -> i32 {
        let mut time = 0;
        let mut prev = points.get(0).unwrap();
        for point in points.iter().skip(1) {
            let dx = (point[0] - prev[0]).abs();
            let dy = (point[1] - prev[1]).abs();
            time += dx.max(dy);
            prev = point; 
        }
        time
    }
}