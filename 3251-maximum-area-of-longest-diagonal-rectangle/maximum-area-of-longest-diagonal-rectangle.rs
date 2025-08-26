impl Solution {
    pub fn area_of_max_diagonal(dimensions: Vec<Vec<i32>>) -> i32 {
        let mut max_dia = 0;
        let mut max_area = 0;
        for dim in dimensions.iter() {
            let dia = dim[0].pow(2) + dim[1].pow(2);
            if dia > max_dia {
                max_dia = dia;
                max_area = dim[0] * dim[1];
            } else if dia == max_dia {
                max_area = max_area.max(dim[0] * dim[1]);
            }
        }
        max_area
    }
}