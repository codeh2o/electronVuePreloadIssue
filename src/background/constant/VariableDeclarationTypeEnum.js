/**
 * 变量类型jsType枚举
 * @type {{TABLE: string, NUMBER: string, STRING: string}}
 */
const VariableDeclarationTypeEnum = {
  STRING: {
    id: 'Primitive',
    name: '数据',
  },
  TABLE: {
    id: 'Table',
    name: '表格',
  },
};

module.exports = Object.freeze(VariableDeclarationTypeEnum);
