import Joi from "joi";
import chalk from "chalk";

const usersvalidation = async (req, res, next) => {
    const {name, lastname, email, password} = req.body;
    const schema = Joi.object({
        name: Joi.string()
            .required()
            .messages({"string.empty": `Siz nameni kiritmadingiz.!`}),
        lastname: Joi.string()
            .required()
            .messages({"string.empty": `Siz lastnameni kiritmadingiz.!`}),
        email: Joi.string().required().email().messages({
            "string.email": `Notog'ri email manzil kiritdingiz.!`,
            "string.empty": `Siz email kiritmadingiz.!`,
        }),
        password: Joi.string().required().min(6).messages({
            "string.empty": `Siz parol kiritmadingiz.!`,
            "string.min": `Parol kamida {#limit} harfdan tashkil topgan bolishi lozim.!`,
        }),
    });
    try {
        const value = await schema.validate({
            name: name,
            lastname: lastname,
            email: email,
            password: password,
        });
        if (value.error) {
            res.render("form", {error: value.error})
        } else {
            next();
        }
    } catch (error) {
        console.error(chalk.red.bold(error));
    }
};

export {usersvalidation};
