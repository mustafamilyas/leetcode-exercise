func byPriority(a, b interface{}) int {
    priorityA := a
    priorityB := b
    return -utils.IntComparator(priorityA, priorityB) // "-" descending order
}

func minStoneSum(piles []int, k int) int {
    queue := priorityqueue.NewWith(byPriority);
    sum := 0
    for i := 0; i < len(piles); i++ {
        queue.Enqueue(piles[i])
        sum += piles[i]
    }
    for k > 0 && !queue.Empty() {
        k--
        if top, _ := queue.Peek(); top == 1 {
            continue
        }
        top, _ := queue.Dequeue()
        topInt, ok := top.(int)
        if !ok {
            continue
        }
        removed := int(math.Floor(float64(topInt) / 2.0))
        sum -= removed
        queue.Enqueue(topInt - removed)
    }
    return sum
}