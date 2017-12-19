const { Model } = require('objection');

class CV extends Model {
  static get tableName () {
    return 'curriculums';
  }

}
module.exports = CV;
