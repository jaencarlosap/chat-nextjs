const messages = [];

const setMessage = message => {
  messages.push(message);
};

module.exports = { messages, setMessage };
