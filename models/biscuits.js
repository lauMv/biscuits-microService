module.exports = (sequelize, DataTypes) => {
    const biscuits = sequelize.define("biscuits", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
      },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    });

    return biscuits;
  };