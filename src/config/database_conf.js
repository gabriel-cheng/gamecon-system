import Sequelize from "sequelize";

console.log("Database → ", process.env.DATABASE_NAME);

 const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASS,
    {
        "host": process.env.DATABASE_HOST,
        "dialect": "postgres"
    }
);

export default sequelize;
