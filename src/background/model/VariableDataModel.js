const knex = require('../knex');
const VariableDuplicatedDeclarationException = require('../exceptions/VariableDuplicatedDeclarationException');
const _ = require('lodash');

/**
 * 变量数据模型
 */
class VariableDataModel {
  #tableName = 'variable_data';

  /**
   *
   * @param select
   * @param where
   * @returns {Promise<{id:String,variable_declaration_id:String,data:String}>}
   */
  async selectOne(select = ['*'], where = {}) {
    const row = await knex(this.#tableName)
      .where(where)
      .select(...select)
      .first();
    return row;
  }

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
    return row.first;
  }

  async ifExist(id) {
    const count = await knex(this.#tableName)
      .count('* as number')
      .where('id', id)
      .first();
    return count.number > 0;
  }

  /**
   * 添加变量数据
   * @param variableDeclarationId
   * @param data
   * @returns {Promise<void>}
   */
  async add(variableDeclarationId, data) {
    await knex(this.#tableName)
      .insert({
        id: _.uniqueId(),
        variable_declaration_id: variableDeclarationId,
        data,
      });
  }
}

module.exports = new VariableDataModel();
