import Sequelize, { Model } from 'sequelize';

import uuid from 'uuid/v4';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        canceled_at: Sequelize.DATE,
      },
      { sequelize }
    );
    this.addHook('beforeSave', plan => {
      plan.id = uuid();
    });
  }
}

export default Plan;
