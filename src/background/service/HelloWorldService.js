// const variableModel = require('../model/VariableDeclarationModel');

class HelloWorldService {
  // eslint-disable-next-line class-methods-use-this
  speak() {
    return 'hello world';
  }
}

module.exports = new HelloWorldService();
