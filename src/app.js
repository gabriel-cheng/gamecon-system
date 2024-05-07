import express from "express";
import user_router from "./router/user_router.js";
import sequelize from "./config/database_conf.js";
import User from "./models/user_model.js";

try {

    sequelize.sync({ force: false })
    .then(console.log("Connection has been established successfully."));
} catch(error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(express.json());

app.use("/users", user_router);

export default app;
