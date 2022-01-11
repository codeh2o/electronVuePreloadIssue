/**
 * 模型
 */
const ModelTypeNotCompatibleException = require('../exceptions/ModelTypeNotCompatibleException');

class Model {
  #id;

  #modelTypeEnum;

  #data;

  #parametersSignature;

  /**
   * 模型构造函数
   * @param {String} id
   * @param {ModelTypeEnum} modelTypeEnum
   * @param {Object} data
   * @param {ParametersSignature
   * } parametersSignature
   */
  constructor(id, modelTypeEnum, data, parametersSignature) {
    /**
     * 模型名称
     * @type {String}
     */
    this.#id = id;
    /**
     * 模型类型
     * @type {ModelTypeEnum}
     */
    this.#modelTypeEnum = modelTypeEnum;
    /**
     * 模型数据
     * @type {Object}
     */
    this.#data = data;
    /**
     * 模型参数类型
     * @type {Parameters}
     */
    this.#parametersSignature = parametersSignature;
  }

  /**
   * 运行模型
   * @param {Object} parameters
   */
  run(parameters) {
    // 传入的参数与模型参数类型是否相同
    if (!this.#parametersSignature.isFullyCompatible(parameters)) {
      throw new ModelTypeNotCompatibleException();
    }

    // eslint-disable-next-line no-eval
    const ret = eval(this.#data);
    return ret;
  }
}

module.exports = Model;
