type Entry = { p: number; tid: number; uid: number; ver: number };

class TaskManager {
  // source of truth
  private taskState = new Map<number, { uid: number; p: number; ver: number; alive: boolean }>();
  // max-heap by (p desc, tid desc)
  private heap = new PriorityQueue<Entry>((a, b) => {
    if (a.p === b.p) return b.tid - a.tid;
    return b.p - a.p;
  });

  constructor(tasks: number[][]) {
    for (const [uid, tid, p] of tasks) this.add(uid, tid, p);
  }

  add(uid: number, tid: number, p: number) {
    const prev = this.taskState.get(tid);
    const ver = (prev?.ver ?? 0) + 1;
    this.taskState.set(tid, { uid, p, ver, alive: true });
    this.heap.enqueue({ p, tid, uid, ver });
  }

  edit(tid: number, newP: number) {
    const st = this.taskState.get(tid);
    if (!st || !st.alive) return;
    const ver = st.ver + 1;
    const uid = st.uid;
    this.taskState.set(tid, { uid, p: newP, ver, alive: true });
    this.heap.enqueue({ p: newP, tid, uid, ver });
  }

  rmv(tid: number) {
    const st = this.taskState.get(tid);
    if (!st) return;
    st.alive = false;
    this.taskState.set(tid, st);
  }

  execTop(): number {
    while (!this.heap.isEmpty()) {
      const top = this.heap.front(); // peek
      const st = this.taskState.get(top.tid);
      // stale if deleted, version mismatch, or user moved
      if (!st || !st.alive || st.ver !== top.ver || st.uid !== top.uid || st.p !== top.p) {
        this.heap.dequeue();
        continue;
      }
      // valid
      this.heap.dequeue();
      st.alive = false; // or keep alive if "execute" shouldn't delete
      this.taskState.set(top.tid, st);
      // return what you need:
      return top.uid; // or top.uid
    }
    return -1;
  }
}
