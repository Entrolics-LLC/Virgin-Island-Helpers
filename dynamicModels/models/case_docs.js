'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema)  => {
    class CaseDocs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    CaseDocs.init(
        {
            artifact_id: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            file_id: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            case_no: DataTypes.STRING,
            document_name: DataTypes.STRING,
            document_type: DataTypes.STRING,
            category_type: DataTypes.STRING,
            status: DataTypes.STRING,
            // priority: DataTypes.STRING,
            // case_status: DataTypes.STRING,
            // case_category: DataTypes.STRING,
            // category_confidence: DataTypes.FLOAT,
            // adjudicate_status: {
            //     type: DataTypes.STRING,
            //     defaultValue: 'Requires Review'
            // },
            is_open: { type: DataTypes.BOOLEAN, defaultValue: false },
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
            modelName: 'case_docs',
            schema,
            createdAt: false,
            updatedAt: false
        });




    return CaseDocs;
};