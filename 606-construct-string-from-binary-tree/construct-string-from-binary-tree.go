/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func tree2str(root *TreeNode) string {
    if (root == nil) {return ""}
    str := strconv.Itoa(root.Val);
    left := tree2str(root.Left)
    right := tree2str(root.Right)
    if (right != "") {
      str += "("+ left + ")" + "(" + right + ")"
    } else if (left != "") {
      str += "("+ left + ")"
    }
    return str
}