const variableDataModel = require('../../model/VariableDataModel');
const variableDataTypeEnum = require('../../constant/VariableDeclarationTypeEnum');
const variableDeclarationService = require('../../service/VariableDeclarationService');

/**
 * 数据
 */
class Variable {
  #value = null; // 变量的值

  #variableDeclarationId; // 变量申明id

  /**
   *
   * @param {String} type
   * @param {Object} value
   */
  constructor(variableDeclarationId, value) {
    /**
     * 数据类型
     * @type {VariableDeclarationTypeEnum}
     */
    this.#variableDeclarationId = variableDeclarationId;

    /**
     * 变量值
     * 数据id
     * @type {String}
     */
    this.#value = value;
    this.setValue(this.#value);
  }

  /**
   * 读取变量
   * @param variableDeclarationId
   * @returns {Promise<{id: String, variable_declaration_id: String, data: String}>}
   */
  async getValue(variableDeclarationId) {
    const variableData = await variableDataModel.selectOne(['*'], { variable_declaration_id: variableDeclarationId });
    return variableData;
  }

  /**
   * 设置变量的值
   * @param {String} variableDeclarationId
   * @param {Object} data
   * @returns {Promise<void>}
   */
  async setValue(variableDeclarationId, data) {
    await variableDataModel.add(variableDeclarationId, data);
  }

  /**
   * 设置数据
   * @param String name
   * @param VariableDeclarationTypeEnum variableDeclarationTypeEnum
   * @param String belongToModelId
   * @returns {Promise<void>}
   */
  async declare(name, variableDeclarationTypeEnum, belongToModelId) {
    if (variableDeclarationTypeEnum.type === variableDataTypeEnum.Primitive) {
      await variableDeclarationService.declarePrimitiveVariable(name, belongToModelId);
    } else if (variableDeclarationTypeEnum.type === variableDataTypeEnum.TABLE) {
      await variableDeclarationService.declareTableVariable(name, belongToModelId);
    }
  }

  declareAndAssign(name,value){

  }

}

module.exports = Variable;
