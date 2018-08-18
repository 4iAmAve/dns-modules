const estimateBandWidth = (src?: string) => {
  const imageAddr = src || `/images/image.jpg?n=${Math.random()}`;
  let startTime;
  let endTime;
  const downloadSize = 4995374;
  const download = new Image();

  const showResult = () => {
    const duration = Math.round((endTime - startTime) / 1000);
    const bitsLoaded = downloadSize * 8;
    const speedBps = Math.round(bitsLoaded / duration);
    const speedKbps = (speedBps / 1024).toFixed(2) as any;
    const speedMbps = (speedKbps / 1024).toFixed(2);
    console.log(`
      Your connection speed is: ${speedBps}bps, ${speedKbps}kbps and ${speedMbps} Mbps
    `);
  };

  download.onload = () => {
    endTime = (new Date()).getTime();
    showResult();
  };
  startTime = (new Date()).getTime();
  const cacheBuster = `?nnn=${startTime}`;
  download.src = `${imageAddr}${cacheBuster}`;
};

export default estimateBandWidth;
