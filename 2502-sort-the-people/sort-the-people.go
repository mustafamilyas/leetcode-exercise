type People struct {
    name string
    height int
}
func sortPeople(names []string, heights []int) []string {
    people := []People{}
    for i := 0; i < len(names); i++ {
        people = append(people, People{
            name: names[i],
            height: heights[i],
        })
    }
    slices.SortStableFunc(people, func(a, b People) int {
        return  b.height - a.height
    })

    return mapData(people, func(p People) string {
        return p.name
    })
}

func mapData[T, U any](data []T, f func(T) U) []U {
    res := make([]U, 0, len(data))
    for _, e := range data {
        res = append(res, f(e))
    }
    return res
}