const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model { }


Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'comment'
}
);


module.exports = Comment;
