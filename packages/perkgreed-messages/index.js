const MESSAGES = {
  notFound: 'This resource could not be found.',
  test: "A replaced string: $1"
};

const messenger = {
  get(key, ...args) {
    const msg = MESSAGES[key];
    if (!msg) throw new ReferenceError(`Unknown message ${JSON.stringify(key)}`);

    return msg.replace(/\$(\d+)/g, (str, i) => {
      return args[i - 1];
    });
  },
}

module.exports = messenger;
