const variableModel = require('../model/VariableDeclarationModel');
const VariableDeclarationTypeEnum = require('../constant/VariableDeclarationTypeEnum');

/**
 * 变量服务
 */
class VariableDeclarationService {
  /**
   * 申明基本类型变量
   * @param id
   * @returns {Promise<void>}
   */
  async declarePrimitiveVariable(id, modelId) {
    await variableModel.add(`${modelId}.${id}`, VariableDeclarationTypeEnum.Primitive, null, modelId);
  }

  /**
   * 申明基本类型变量
   * @param id
   * @returns {Promise<void>}
   */
  async declareTableVariable(id, modelId) {
    await variableModel.add(`${modelId}.${id}`, VariableDeclarationTypeEnum.TABLE, null, modelId);
  }

  /**
   * 重构变量
   */
  // eslint-disable-next-line class-methods-use-this
  refactor() {

  }
}

module.exports = new VariableDeclarationService();
