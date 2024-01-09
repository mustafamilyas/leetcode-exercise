type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}
type EventPoolItem = {
    id: number
    name: string
    callback: Callback
}

class EventEmitter {
    eventPool: EventPoolItem[]
    counter: number;
    constructor() {
        this.eventPool = []
        this.counter = 0;
    }
    subscribe(eventName: string, callback: Callback): Subscription {
        const id = this.counter++
        this.eventPool.push({id, name: eventName, callback});
        return {
            unsubscribe: () => {
                const eventIndex = this.eventPool.findIndex(e=>e.id === id);
                if(eventIndex >= 0) this.eventPool.splice(eventIndex, 1)
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        const result = [];
        for(const {name, callback} of this.eventPool) {
            if(name === eventName) {
                result.push(callback.apply(null, args))
            }
        }
        return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */