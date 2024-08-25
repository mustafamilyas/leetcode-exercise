/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func postorder(root *Node) []int {
    result := []int{}
    if root == nil {
        return result
    }
    for i := 0; i < len(root.Children); i++ {
        result = append(result, postorder(root.Children[i])...)
    }
    result = append(result, root.Val)
    return result;
}