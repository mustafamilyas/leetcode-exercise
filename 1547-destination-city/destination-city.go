func destCity(paths [][]string) string {
    outgoingCity := make(map[string]bool)


    for _, path := range paths {
        outgoingCity[path[0]] = false;
        _, ok := outgoingCity[path[1]];
        if (ok) {
            outgoingCity[path[1]] = false;
        } else {
            outgoingCity[path[1]] = true
        }
    }

    for city, isDestination := range outgoingCity {
        if isDestination {
            return city
        }
    }
    
    return ""
}