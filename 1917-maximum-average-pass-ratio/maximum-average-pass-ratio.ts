function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const n = classes.length;
    
    const pq = new PriorityQueue<[number, number]>((a, b) => b[0] - a[0]);

    for (let i = 0; i < n; i++) {
        const [pass, total] = classes[i];
        const currentAverage = pass / total;
        const newAverage = (pass + 1) / (total + 1);
        const gain = newAverage - currentAverage;
        pq.enqueue([gain, i]);
    }

    while (extraStudents--) {
        const [currentGain, index] = pq.dequeue() as [number, number];

        classes[index][0]++;
        classes[index][1]++;

        const newAverage = classes[index][0] / classes[index][1];
        const nextAverage = (classes[index][0] + 1) / (classes[index][1] + 1);

        const gain = nextAverage - newAverage;
        pq.enqueue([gain, index]);
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result += classes[i][0] / classes[i][1];
    }

    return result / n;
};