'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IRS_Note extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    IRS_Note.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            case_id:DataTypes.STRING(100),
            user_id:DataTypes.STRING(100),
            notes_text:DataTypes.STRING(2000),
            is_deleted:DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: 'notes',
            schema: 'irs',
            createdAt: false,
            updatedAt: false
        });
    return IRS_Note;
};