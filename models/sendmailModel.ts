import { DataTypes, Model, Sequelize } from "sequelize";
import { TABLES } from "../constant/common";

class Sendmail extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        userName: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255), // Increased length for email addresses
          allowNull: false,
        },
        user_query: {
          type: DataTypes.STRING(255), // Increased length for user queries
          allowNull: false,
        },
        subject: {
          type: DataTypes.STRING(255), // Increased length for subjects
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: TABLES.SENDMAIL,  
        timestamps: false,  
      }
    );
  }
}

export default Sendmail;
