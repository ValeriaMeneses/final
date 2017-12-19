const { Model } = require('objection');

class Category extends Model {
  static get tableName () {
    return 'category';
  }

  static get relationMappings () {
    const CV = require('./CV.js');
    return{
      curriculums : {
        relation: Model.HasManyRelation,
        modelClass: CV,
        join:{
          from: 'category.id',
          to: 'curriculums.categoryId'
        }
      }
    }
  }

}
module.exports = Category;
