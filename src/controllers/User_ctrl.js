import User from "../models/user_model.js";

class UserCtrl {
    async viewAll(req, res) {
        const all_users = await User.findAll();

        return res.json(all_users);
    }

    async createNewUser(req, res) {
        const {
            user_first_name,
            user_last_name,
            user_email,
            user_phone,
            user_password,
        } = req.body;

        const new_user = {
            user_first_name,
            user_last_name,
            user_email,
            user_phone,
            user_password,
        }

        try {
            await User.create(new_user);

            return res.json({
                "status_code": 200,
                "message": "Usuário criado com sucesso."
            });
        } catch(error) {
            return res.json({
                "status_code": 500,
                "message": "Usuário não criado, tente novamente mais tarde."
            });
        }
    }
}

export default UserCtrl;
