const variableModel = require('../model/VariableDeclarationModel');

class HelloWorldService {
  // eslint-disable-next-line class-methods-use-this
  speak() {
    return variableModel.selectOne();
  }
}

module.exports = new HelloWorldService();
