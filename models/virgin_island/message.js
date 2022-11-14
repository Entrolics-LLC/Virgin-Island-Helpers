'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Message.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            message_type:DataTypes.STRING(100),
            message_id: DataTypes.STRING(100),
            case_id:DataTypes.STRING(100),
            user_id:DataTypes.STRING(100),
            message_text:DataTypes.STRING(100),
            message_status:DataTypes.STRING(100),
            message_time:DataTypes.DATE,
            notification_read:DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'messages',
            schema: 'virgin_island',
            createdAt: false,
            updatedAt: false
        });
    return Message;
};