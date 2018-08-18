const IS_PROD = process.env.IS_PROD;

const dnsLogger = (message: string, level: string = 'log') => {
  if (IS_PROD) {
    return null;
  }
  // eslint-disable-next-line
  console[level](
    `%c ${message} `,
    'background: #faf870; font-style: italic; text-shadow: 0 1px #fff; color: #212121',
  );
  return null;
};

export default dnsLogger;
