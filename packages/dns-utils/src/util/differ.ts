export interface DifferObj {
  oldObj: any;
  newObj: any;
  excludeUnchanged?: boolean;
  returnEntireObj?: boolean;
  returnDiv?: boolean;
}

let keepUnchanged: boolean = true;
let entireObj: boolean = false;

function determineAdded(newObj: any, oldObj: any, cur: any) {
  const result = Object.assign({}, cur);
  const toCompare = Object.assign({}, newObj);

  Object.keys(toCompare).forEach(value => {
    if (!(value in oldObj)) {
      if (entireObj) {
        result[value] = {
          type: 'added',
          key: value,
          value: toCompare[value]
        };
      } else {
        result['__added'] = {
          ...result['__added'],
          [value]: newObj[value]
        };
      }

      delete toCompare[value];
    } else if (toCompare[value] instanceof Object || toCompare[value] instanceof Array) {
      const newResult = determineDiff(toCompare[value], oldObj[value]);
      result[value] = {
        ...newResult,
      };
    }
  });

  return { result, alteredNewObj: toCompare };
}

function determineRemoved(newObj: any, oldObj: any, cur: any) {
  const result = Object.assign({}, cur);
  const toCompare = Object.assign({}, oldObj);

  Object.keys(toCompare).forEach(value => {
    if (!(value in newObj)) {
      if (entireObj) {
        result[value] = {
          type: 'removed',
          key: value,
          value: toCompare[value]
        };
      } else {
        result['__removed'] = {
          ...result['__removed'],
          [value]: newObj[value]
        };
      }

      delete toCompare[value];
    } else if (toCompare[value] instanceof Object || toCompare[value] instanceof Array) {
      const newResult = determineDiff(newObj[value], toCompare[value]);
      result[value] = {
        ...newResult,
      };
    }
  });

  return { result, alteredOldObj: toCompare };
}

function determineChanged(newObj: any, oldObj: any, cur: any) {
  const result = Object.assign({}, cur);
  const comparor = Object.assign({}, newObj);
  const comparee = Object.assign({}, oldObj);

  Object.keys(comparor).forEach(value => {
    if (value in comparee) {
      if (comparor[value] instanceof Object || comparor[value] instanceof Array) {
        const newResult = determineDiff(comparor[value], comparee[value]);
        result[value] = {
          ...newResult,
        };
      } else if (comparor[value] !== comparee[value]) {
        if (entireObj) {
          result[value] = {
            type: 'changed',
            key: value,
            from: comparee[value],
            to: comparor[value]
          };
        } else {
          result['__changed'] = {
            ...result['__changed'],
            [value]: {
              from: oldObj[value],
              to: newObj[value]
            }
          };
        }

        delete comparor[value];
        delete comparee[value];
      }
    }
  });

  return { result, alteredOldObj: comparee, alteredNewObj: comparor };
}

function determineUnchanged(newObj: any, oldObj: any, cur: any) {
  const result = Object.assign({}, cur);

  if (!keepUnchanged) {
    return result;
  }

  Object.keys(newObj).forEach(value => {
    if (value in oldObj) {
      if (newObj[value] instanceof Object || newObj[value] instanceof Array) {
        const newResult = determineDiff(newObj[value], oldObj[value]);
        result[value] = {
          ...newResult,
        };
      } else if (newObj[value] === oldObj[value]) {
        if (entireObj) {
          result[value] = {
            type: 'unchanged',
            key: value,
            value: newObj[value]
          };
        } else {
          result['__unchanged'] = {
            ...result['__unchanged'],
            [value]: newObj[value]
          };
        }

        delete newObj[value];
      }
    }
  });

  return result;
}

function determineDiff(newObj: any, oldObj: any) {
  let newClone = Object.assign({}, newObj);
  let oldClone = Object.assign({}, oldObj);
  let cur = {};

  const { result: resultNew, alteredNewObj } = determineAdded(newClone, oldClone, cur);
  newClone = alteredNewObj;
  cur = resultNew;

  const { result: resultOld, alteredOldObj } = determineRemoved(newClone, oldClone, cur);
  oldClone = alteredOldObj;
  cur = resultOld;

  const { result: resultChanged, alteredOldObj: aOO, alteredNewObj: aNO } = determineChanged(newClone, oldClone, cur);
  newClone = aNO;
  oldClone = aOO;
  cur = resultChanged;

  return determineUnchanged(newClone, oldClone, cur);
}

export function differ(diffObj: DifferObj) {
  const { oldObj, newObj, excludeUnchanged, returnEntireObj } = diffObj;
  keepUnchanged = excludeUnchanged || true;
  entireObj = returnEntireObj || false;

  if (!oldObj || !newObj) {
    throw new Error('The old or new object to compare with is missing.');
  }

  if (!(oldObj instanceof Object) && !(newObj instanceof Object)) {
    throw new Error('The old or new object is not an instance of Object.');
  }

  let newClone = Object.assign({}, newObj);
  let oldClone = Object.assign({}, oldObj);

  return determineDiff(newClone, oldClone);
}
