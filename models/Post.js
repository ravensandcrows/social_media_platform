const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model { }


Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            //change this if we want to also have the option to do only comments
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        likes: {
            type: DataTypes.STRING,
            

        }
    }, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
}
);


module.exports = Post;
