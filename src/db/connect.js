import Sequelize from 'sequelize';

//mysql://admin:3793381lin@siteo.cbmvxfudhnyb.ap-southeast-1.rds.amazonaws.com/siteo
export default new Sequelize('siteo', 'admin', '3793381lin',  {
  host: 'siteo.cbmvxfudhnyb.ap-southeast-1.rds.amazonaws.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false,
    freezeTableName: true,
  }
});