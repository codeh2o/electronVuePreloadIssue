const service = require('../../src/background/serviceConfig');
const variableDataModel = require('../../src/background/model/VariableDataModel');

describe('变量数据', () => {
  it('添加变量数据', async () => {
    const aaa = await variableDataModel.add(2, 'hahaha');
    debugger
  });

  it('获取variableData变量数据', async () => {
    const variableData = await variableDataModel.selectOne(['*'], { variable_declaration_id: '1' });
    debugger
  });

});
