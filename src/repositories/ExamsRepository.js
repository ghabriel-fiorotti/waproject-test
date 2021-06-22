const db = require('../../db')

module.exports = {
    list: async () => {
        try {
            const response = await db('exams').where({'status_exam': 'ativo', 'deleted_at' : null});
            return response;
        } catch (error) {
            return error;
        }
    },

    insert: async (data) => {
        try {
            const {exam_name, type_exam} = data;
            const response = await db('exams').insert({exam_name, type_exam});
            return response;
        } catch (error) {
            return error;
        }
    },


    update : async (data, id) => {
        try {
            const { exam_name, type_exam, status_exam } = data;
            const response = await db('exams').where({'id' : id}).update({exam_name, type_exam, status_exam});
            return response;
        } catch (error) {
            return error;
        }
    },

    delete : async (id) => {
        try {
            const response = await db('exams').where({'id' : id}).update({deleted_at : new Date()});
            return response;
        } catch (error) {
            return error;
        }
    }
}