'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IRS_Applicant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    IRS_Applicant.init(
        {
            application_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            map_case_number: DataTypes.STRING,
            applicant_name: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
            is_deleted: DataTypes.BOOLEAN,
            key_pairs: DataTypes.JSON
        },
        {
            sequelize,
            modelName: 'irs_applicants',
            tableName: 'applicants',
            schema: 'irs',
            createdAt: false,
            updatedAt: false
        });
    return IRS_Applicant;
};