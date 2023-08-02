type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}
type EventPoolItem = {
    name: string
    callback: Callback
}

class EventEmitter {
    eventPool: EventPoolItem[]
    constructor() {
        this.eventPool = []
    }
    subscribe(eventName: string, callback: Callback): Subscription {
        const eventIndex = this.eventPool.length
        this.eventPool.push({name: eventName, callback});
        return {
            unsubscribe: () => {
                this.eventPool.splice(eventIndex, 1)
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