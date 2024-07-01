import { Sequelize } from 'sequelize';

const dialect='mysql'
const host= '127.0.0.1'
const username= 'root'
const password= 'admin123'
const port= 3306

const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}`);
  const createDatabase = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      await sequelize.query('CREATE DATABASE IF NOT EXISTS mail_service;');
      console.log('Database "mail_service" created  successfully');
    
      await sequelize.close();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  createDatabase();

export default sequelize;
