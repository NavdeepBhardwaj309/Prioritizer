module.exports = (sequelize, DataTypes) => {
  return sequelize.define("task", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    dueDate: {
      type: DataTypes.DATE
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: "Medium"
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "To Do"
    }
  });
};
