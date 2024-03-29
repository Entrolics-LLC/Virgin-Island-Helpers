'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
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
            case_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            file_id: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            case_no: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            applicant_id: DataTypes.STRING,
            notes: DataTypes.STRING,
            case_detail: DataTypes.JSON,
            created_at: {
                type: DataTypes.DATE
            },
            case_manager_id: DataTypes.STRING,
            supporting_document_ids: DataTypes.ARRAY(DataTypes.STRING),
            case_status: DataTypes.STRING,
            priority: DataTypes.STRING,
            members: DataTypes.ARRAY(DataTypes.STRING),
            is_deleted: DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: `${schema}_case_details`,
            tableName: 'case_details',
            schema,
            createdAt: false,
            updatedAt: false
        });




    return Case_Detail;
};