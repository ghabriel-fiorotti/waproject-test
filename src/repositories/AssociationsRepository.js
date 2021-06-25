const db = require('../../db')

module.exports = {

    insert: async (laboratory_id, exam_id) => {
        try {
            const response = await db('association').insert({ laboratory_id, exam_id });
            return response;
        } catch (error) {
            return error;
        }
    },

    remove: async (id) => {
        try {
            const response = await db('association').where({ 'id': id }).del();
            return response;
        } catch (error) {
            return error;
        }
    }
}