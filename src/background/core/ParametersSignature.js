class ParametersSignature {
  /**
   * 变量签名参数的数据
   * // 基本数据
   * {},
   * // 行
   * [{},{}]
   * // 表
   * [[{},{}]]
   * // 表格数据
   * {
   * 	name: b,
   * 	type: [[{
   * 	  name:a,
   * 	  type:[prim]
   * 	}]]
   * }]
   */
  parametersSignatureJson;

  /**
   *
   * @param dataJson
   */
  constructor(dataJson) {
    /**
     * 参数的json数据
     * @Type Object
     */
    this.parametersSignatureJson = dataJson;
  }

  /**
   * 参数是否匹配
   * @param {Object}
   * @returns {boolean}
   */
  isFullyCompatible(parameters) {
    return true;
  }

  /**
   *
   * @param parameters {Object}
   */
  isCompatible(parameters) {

  }

  #walkParameters(parameterNode) {

  }

  /**
   * 所有参数签名对应的参数都提供了(可以多提供参数,至少提供了参数签名对应的参数)
   * @param parameterTypeNode
   * @param parameterNode
   */
  #isParameterMatchToParameterType(parameterTypeNode, parameterNode) {
    for (const parameterTypeNodeElement of parameterTypeNode) {
      if (parameterNode[parameterTypeNodeElement] && parameterNode) {

      }
    }
  }

  /**
   * 所有参数签名和参数签名都相应提供了(且没有提供签名不需要的参数)(程序模型使用)
   * @param parameterTypeNode
   * @param parameterNode
   */
  #isParameterAndParameterTypeExactlyMatch(parameterTypeNode, parameterNode) {

  }
}

module.exports = ParametersSignature;
