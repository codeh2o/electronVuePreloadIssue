/**
 * 变量类型jsType枚举
 * @type {{TABLE: {name: string, id: string}, Primitive: {name: string, id: string}}}
 */
const VariableDeclarationTypeEnum = {
  Primitive: {
    id: 'Primitive',
    name: '数据',
  },
  TABLE: {
    id: 'Table',
    name: '表格',
  },
};

module.exports = Object.freeze(VariableDeclarationTypeEnum);
