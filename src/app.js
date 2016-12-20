// Alexa handlers
const handlers = {
  'HelloWorldIntent': function () {
    this.emit(':tell', 'Hello World!');
  }
};

module.exports = { handlers };
