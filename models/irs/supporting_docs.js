'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IRS_SupportingDoc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    IRS_SupportingDoc.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            file_id: DataTypes.STRING,
            supp_doc_type: DataTypes.STRING,
            file_address: DataTypes.STRING,
            file_name: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
            is_deleted: DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: 'irs_supporting_docs',
            tableName: 'supporting_docs',
            schema: 'irs',
            createdAt: false,
            updatedAt: false
        });
    return IRS_SupportingDoc;
};