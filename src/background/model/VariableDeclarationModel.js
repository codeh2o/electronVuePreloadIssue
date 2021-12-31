const knex = require('../knex');
const VariableDuplicatedDeclarationException = require('../exceptions/VariableDuplicatedDeclarationException');

/**
 * 变量申明模型
 */
class VariableDeclarationModel {
  #tableName = 'variable_declaration';

  /**
   * 根据ID查找
   * @param id
   * @returns {Promise<awaited Knex.QueryBuilder<TRecord, DeferredKeySelection.AddUnionMember<UnwrapArrayMember<TResult>, undefined>>>}
   */
  async selectById(id) {
    const row = await knex(this.#tableName)
      .select('*')
      .where('id', id)
      .first();
    return row;
  }

  async ifExist(id) {
    const count = await knex(this.#tableName)
      .count('* as number')
      .where('id', id)
      .first();
    return count.number > 0;
  }

  /**
   * 添加变量申明
   * @param id string 变量名
   * @param type VariableDeclarationTypeEnum 变量类型
   * @param schema
   * @param initData
   * @returns {Promise<void>}
   */
  async add(id, variableDeclarationTypeEnum, schema, modelId) {
    const currentTimestamp = (new Date()).getTime();
    const exist = await this.ifExist(id);
    if (exist) {
      throw new VariableDuplicatedDeclarationException(`错误:数据${id}重复定义`);
    } else {
      await knex(this.#tableName)
        .insert({
          id,
          type: variableDeclarationTypeEnum.id,
          schema,
          model_id: modelId,
          create_date: currentTimestamp,
          update_date: currentTimestamp,
        });
    }
  }
}

module.exports = new VariableDeclarationModel();
