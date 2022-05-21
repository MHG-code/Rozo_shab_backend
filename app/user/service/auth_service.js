let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');
const Promise = require('bluebird');

let user_model = require('../Model/User');

let registration = (data) => {
    let password = bcrypt.hashSync(data.password, 8);
    let email = data.email.toLowerCase();
    let User = new user_model({ ...data, email, password });
    return User.save()
        .then(user => {
            return { user }
        }, err => {
            return err.message
        });
}

const login = (data) => {
    var email = data.email.toLowerCase();
    return user_model.findOne({ email: email })
        .then(user => {
            if (user && bcrypt.compareSync(data.password, user.password)) {
                const token = authToken(user);
                return Promise.resolve({ token: token, user: user });
            }
            else {
                return Promise.reject(ES.authError('Authentication Failed'));
            }
        })
}

const authToken = (user) => {
    return jwt.sign(
        {
            email: user.email,
            _id: user._id,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: process.env.TOKEN_EXPIRY_TIME
        }
    )
}


module.exports = { registration,login}