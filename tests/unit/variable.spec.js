const service = require('../../src/background/serviceConfig');

describe('添加变量', () => {
  it('添加基本类型变量', async () => {
    await service.variableDeclarationService.declarePrimitiveVariable('hello2', 1);
  });

  it('添加基本类型变量', async () => {
    await service.variableDeclarationService.declarePrimitiveVariable('hello2', 1);
  });
});
