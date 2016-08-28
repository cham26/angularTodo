'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Schedule', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    day: DataTypes.STRING,
    date: DataTypes.INTEGER,
    isWorking: DataTypes.BOOLEAN,
    shift: DataTypes.STRING
  });
}
