/**
 * 变量重复定义异常
 */
class ModelTypeNotCompatibleException extends Error {
  #message;

  constructor(message) {
    super(message);
    this.name = 'ModelTypeNotCompatibleException';
  }
}

module.exports = ModelTypeNotCompatibleException;
