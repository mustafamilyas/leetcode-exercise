/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
    res := []int{}
    if root == nil {return res;}
    res = append(res, postorderTraversal(root.Left)...)
    res = append(res, postorderTraversal(root.Right)...)
    res = append(res, root.Val)
    return res;
}