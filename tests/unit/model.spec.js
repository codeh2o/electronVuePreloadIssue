const service = require('../../src/background/serviceConfig');

describe('添加模型', () => {
  it('添加JS模型:helloWorld', async () => {
    await service.modelService.declareJsModel('helloWorld', {}, 'return "hello world"');
  });
});
