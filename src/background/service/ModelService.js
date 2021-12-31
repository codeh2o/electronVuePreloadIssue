const modeModel = require('../model/ModeModel');
const ModelTypeEnum = require('../constant/ModelTypeEnum');

/**
 * 模型服务
 */
class ModelService {
  /**
   * 申明js模型
   * @param id
   * @param modelId
   * @param paramters
   * @param data
   * @returns {Promise<void>}
   */
  async declareJsModel(id, parameters, data) {
    await modeModel.add(id, ModelTypeEnum.PROGRAM, paramters, data);
  }

  /**
   * 重构模型
   */
  // eslint-disable-next-line class-methods-use-this
  refactor() {

  }
}

module.exports = new ModelService();
