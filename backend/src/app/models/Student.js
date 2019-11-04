import Sequelize, { Model } from 'sequelize';
import uuid from 'uuid/v4';
import differenceInYears from 'date-fns/differenceInYears';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATE,
        age: {
          type: Sequelize.VIRTUAL,
          get() {
            return differenceInYears(new Date(), this.birthday);
          },
        },
        weight: Sequelize.STRING,
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
