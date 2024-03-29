'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema)  => {
    class SupportingDoc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SupportingDoc.init(
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
            modelName: `${schema}_supporting_docs`,
            tableName: 'supporting_docs',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return SupportingDoc;
};