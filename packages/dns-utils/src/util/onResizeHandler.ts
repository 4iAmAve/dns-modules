const Singleton = (() => {
  let instance = false;

  function createInstance() {
    const onResizeHandler = (width: any, height: number | string) => {
      window.parent.postMessage({ action: 'setIframeHeight', height }, '*');
    };

    return onResizeHandler;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance() as any;
      }
      return instance;
    },
  };
})();

export default Singleton.getInstance();
