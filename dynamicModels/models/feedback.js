'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Feedback.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,

            },
            feedback: DataTypes.STRING(1000),
            user_id: DataTypes.STRING,
            sentiment: DataTypes.FLOAT,
            rating: DataTypes.FLOAT,
            created_at: {
                type: DataTypes.DATE
            },
            is_deleted: DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: `${schema}_feedbacks`,
            tableName: 'feedbacks',
            schema,
            createdAt: false,
            updatedAt: false
        });

    return Feedback;
};