/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func levelOrder(root *Node) [][]int {
    result := [][]int{}
    if root == nil {
        return result
    }
    queue := []*Node{root}

    for len(queue) > 0 {
        currentLevel := []int{};
        next := []*Node{};
        for _, node := range queue {
            currentLevel = append(currentLevel, node.Val);
            next = append(next, node.Children...)
        }
        result = append(result, currentLevel)
        queue = next
    }
    return result;
}