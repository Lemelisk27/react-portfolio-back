const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "https://via.placeholder.com/1450x650.png?text=Place+Holder+Image"
    },
    github: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    site: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Project