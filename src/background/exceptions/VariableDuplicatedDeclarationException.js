/**
 * 变量重复定义异常
 */
class VariableDuplicatedDeclarationException extends Error {
  constructor(message) {
    super(message);
    this.name = 'VariableDuplicatedDeclarationException';
  }
}

module.exports = VariableDuplicatedDeclarationException;
