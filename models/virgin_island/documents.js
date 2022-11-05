'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Document extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Document.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true
            },
            submission_id: DataTypes.STRING,
            document_name: DataTypes.STRING,
            document_type: DataTypes.STRING,
            status: DataTypes.STRING,
            priority: DataTypes.STRING,
            case_status: DataTypes.STRING,
            case_category: DataTypes.STRING,
            adjudicate_status:{ 
                type:DataTypes.STRING,
                defaultValue: 'Requires Review'
            },
            is_open: DataTypes.BOOLEAN,
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
            modelName: 'documents',
            schema: 'virgin_island',
            createdAt: false,
            updatedAt: false
        });
    return Document;
};