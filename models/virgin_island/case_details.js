'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Case_Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Case_Detail.init(
            {
                file_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                   
                },
                case_summary: DataTypes.STRING(10000),
                income: DataTypes.STRING,
                assets: DataTypes.STRING,
                expenses: DataTypes.STRING,
                narrative: DataTypes.STRING,
                health_information: DataTypes.STRING,
                members: DataTypes.ARRAY(DataTypes.STRING),
                created_at: {
                    type: DataTypes.DATE
                },
                is_deleted: DataTypes.BOOLEAN
            },
            {
                sequelize,
                modelName: 'case_details',
                schema: 'virgin_island',
                createdAt: false,
                updatedAt: false
            });
        
    


    return Case_Detail;
};