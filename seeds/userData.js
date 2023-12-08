const { User } = require('../models');

const userData = [
    {
        "username": "chrisw",
        "email": "christian@gmail.com",
        "password": "christianw"
    },
    {
        "username": "dreit",
        "email": "jandrei@gmail.com",
        "password": "jandreit"
    },
    {
        "username": "kalib",
        "email": "kali@hotmail.com",
        "password": "kaliblack"
    },
    {
        "username": "irim",
        "email": "irina@hotmail.com",
        "password": "irimeroi"
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});
module.exports = seedUser;