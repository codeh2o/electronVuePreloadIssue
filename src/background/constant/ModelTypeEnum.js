/**
 * 变量类型jsType枚举
 * @type {{BUSINESS: {name: string, id: string}, PROGRAM: {name: string, id: string}}}
 */
const ModelTypeEnum = {
  PROGRAM: {
    id: 'Js',
    name: '程序模型',
  },
  BUSINESS: {
    id: 'Biz',
    name: '业务模型',
  },
};

module.exports = Object.freeze(ModelTypeEnum);
