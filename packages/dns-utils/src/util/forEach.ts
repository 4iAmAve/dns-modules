// see https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/

const forEach = (list: any, callback: any, scope: any) => {
  let iteration = 0;
  for (iteration; iteration < list.length; iteration += 1) {
    callback.call(scope, iteration, list[iteration]);
  }
};

export default forEach;
