'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IRS_Feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
        IRS_Feedback.init(
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
                modelName: 'feedbacks',
                schema: 'irs',
                createdAt: false,
                updatedAt: false
            });
        
    


    return IRS_Feedback;
};