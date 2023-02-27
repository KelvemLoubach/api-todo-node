import {Sequelize} from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.MYSQL_BD as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port: parseInt(process.env.PORT as string)
    }
);