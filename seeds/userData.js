const { User } = require('../models');

const userData = [
    {
        "username": "christian",
        "email": "christian@gmail.com",
        "password": "qwert12345"
    },
    {
        "username": "jandrei",
        "email": "jandrei@gmail.com",
        "password": "12345qwert"
    },
    {
        "username": "kali",
        "email": "kali@hotmail.com",
        "password": "poiuy09876"
    },
    {
        "username": "irina",
        "email": "irina@hotmail.com",
        "password": "09876poiuy"
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});
module.exports = seedUser;