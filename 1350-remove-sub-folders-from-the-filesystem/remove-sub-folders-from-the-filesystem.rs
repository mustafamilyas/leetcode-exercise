impl Solution {
    pub fn remove_subfolders(mut folder: Vec<String>) -> Vec<String> {
        folder.sort();
        let mut root_str = "*".to_string();
        let mut result = vec![];
        for (i, v) in folder.iter().enumerate() {
            if !v.starts_with(&root_str) {
                result.push(v.to_string());
                root_str = format!("{}/", v);
            }
        }
        result
    }
}