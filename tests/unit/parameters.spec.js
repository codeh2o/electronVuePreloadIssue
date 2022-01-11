const service = require('../../src/background/serviceConfig');
const Parameters = require('../../src/background/core/ParametersSignature');

describe('测试参数', () => {
  it('参数完全匹配', async () => {
    const parametersType = [{
      name: 'a',
      type: ['prim'],
    }, {
      name: 'b',
      type: ['prim'],
    }];

    const parameterInput = [{
      name: 'a',
      value: 1,
    }, {
      name: 'b',
      type: 'hello',
    }];
    const parameters = new Parameters(parametersType);
    expect(parameters.isExactlyCompatible(parameterInput))
      .toBe(true);
  });

  it('添加基本类型变量', async () => {
    await service.variableDeclarationService.declarePrimitiveVariable('hello2', 1);
  });
});
