import { Call, Subscription } from './definitions';

import send from './send';

const defaultTimeout: number = 5000;
let queue: Subscription[] = [];
let intermediateQueue: (string | number)[] = [];
let running: boolean = false;
let startTimer;

const endQueue = () => {
  return dispatch => {
    if (running) {
      running = false;
      queue = [] as any;
      intermediateQueue = [] as any;
      clearTimeout(startTimer);
    }
  };
};

const endCallForId = (id: number | string) => {
  return dispatch => {
    let callId = null as any;
    queue.filter((subscription: Subscription, key: number) => {
      if (subscription.id === id) {
        callId = key;
      }
    });
    intermediateQueue = intermediateQueue.filter(sub => sub !== id);

    queue.splice(callId, 1);
    if (!queue.length) {
      dispatch(endQueue());
    }
  };
};

const run = () => {
  return (dispatch: any) => {
    if (running) {
      queue.map((subscription: Subscription, key: number) => {
        const now = new Date().getTime();
        const lastRun = subscription.call.lastRun || now;
        const timeout = subscription.timeout || defaultTimeout;
        const callCount = subscription.call.callCount || 0;

        if ((now - lastRun > timeout) || (now - lastRun === 0)) {
          const alreadyRunning = intermediateQueue.filter(sub => sub === subscription.id);
          if (!alreadyRunning.length) {
            const call = {
              ...subscription.call,
              successCallback: (res: any) => {
                if (subscription.call.successCallback) {
                  subscription.call.successCallback(res);
                }
                intermediateQueue = intermediateQueue.filter(sub => subscription.id !== sub);
              }
            } as Call;

            dispatch(send(call));

            intermediateQueue.push(subscription.id);
            queue.splice(key, 1);
            queue.push({
              ...subscription,
              call: {
                ...subscription.call,
                lastRun: now,
                callCount: callCount + 1
              },
            });
          }
        }
      });

      setTimeout(
        () => {
          if (!queue.length) {
            dispatch(endQueue());
          } else {
            dispatch(run());
          }
        },
        1000
      );
    }
  };
};

const startQueue = () => {
  return dispatch => {
    if (!running) {
      running = true;
      dispatch(run());
    }
  };
};

const subscribe = (id: string | number, call: Call, timeout?: number) => {
  return (dispatch: any) => {
    const callTimeout = timeout || defaultTimeout;
    queue.push({
      id,
      call,
      timeout: callTimeout,
    });
    dispatch(startQueue());
  };
};

export {
  subscribe,
  startQueue,
  endQueue,
  endCallForId,
};
