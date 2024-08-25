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
    for _, child := range root.Children {
        result = append(result, postorder(child)...)
    }
    result = append(result, root.Val)
    return result;
}