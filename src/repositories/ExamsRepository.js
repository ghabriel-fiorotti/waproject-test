const db = require('../../db')

module.exports = {
    list: async () => {
        try {
            const response = await db('exams').where({ 'deleted_at': null }).select('id', 'exam_name', 'type_exam');
            return response;
        } catch (error) {
            return error;
        }
    },

    verifyExist: async (exam) => {
        try {
            const response = await db('exams').where({ exam_name: exam })
            return response;
        } catch (error) {
            return error;
        }
    },

    insert: async (data) => {
        try {
            const { exam_name, type_exam } = data;
            const response = await db('exams').insert({ exam_name, type_exam });
            return response;
        } catch (error) {
            return error;
        }
    },


    update: async (data) => {
        try {
            const { id, exam_name, type_exam, status_exam } = data;
            const response = await db('exams').where({ 'id': id }).update({ exam_name, type_exam, status_exam });
            return response;
        } catch (error) {
            return error;
        }
    },

    delete: async (id) => {
        try {
            const response = await db('exams').where({ 'id': id }).update({ status_exam: "inativo", deleted_at: new Date() });
            return response;
        } catch (error) {
            return error;
        }
    },

    validActiveTrueExam: async (id) => {
        try {
            const response = await db('exams').where({ id: id, status_exam: "ativo" });
            return response;
        } catch (error) {
            return error;
        }
    }
}