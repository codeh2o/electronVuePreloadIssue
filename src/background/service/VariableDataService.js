const VariableDataTypeEnum = require('../constant/VariableDeclarationTypeEnum');
const variableDataModel = require('../model/VariableDataModel');

/**
 * 变量服务
 */
class VariableDataService {
  /**
   * 储存数据
   * @param id
   * @returns {Promise<void>}
   */
  async add(variableDeclarationId, value) {
    await variableDataModel.add(`${variableDeclarationId}.${id}`, VariableDataTypeEnum.STRING, null, value);
  }

  /**
   * 读取变量数据
   */
  // eslint-disable-next-line class-methods-use-this
  async get(variableDeclarationId) {
    const variableData = await variableDataModel.selectOne(['*'], { variable_declaration_id: variableDeclarationId });
    return variableData;
  }
}

module.exports = new VariableDataService();
