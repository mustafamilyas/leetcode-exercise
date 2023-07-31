type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
    let timeoutID: ReturnType<typeof setTimeout> | null = null;
    let latestArgs: any[] | null = null;

    function fireNext() {
        timeoutID = setTimeout(()=> {
            if(latestArgs) {
                fn.apply(this, latestArgs);
                fireNext();
            } else {
                timeoutID = null
            }
            latestArgs = null
        }, t)
    }

  return function (...args) {
      if(timeoutID === null) {
          fn.apply(this, args);
          fireNext();
      } else {
          latestArgs = args;
      }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */