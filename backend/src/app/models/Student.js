import Sequelize, { Model } from 'sequelize';
import uuid from 'uuid/v4';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATE,
        weight: Sequelize.FLOAT,
        height: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', user => {
      user.id = uuid();
    });
  }
}

export default Student;
