const db = require('../../db')

module.exports = {

    verifyId: async (id) => {
        try {
            const response = await db('laboratories').whereIn('id', id).where('deleted_at', null)
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    list: async () => {
        try {
            const response = await db('laboratories').where({ 'deleted_at': null }).select('id', 'laboratory_name', 'address');
            return response;
        } catch (error) {
            return error;
        }
    },

    listJoin: async (exam) => {
        try {
            const response = await db('laboratories').join('association', 'laboratory_id', '=', 'laboratories.id')
                .join('exams', 'association.exam_id', '=', 'exams.id', 'exams.exam_name', '=', exam)
                .select('laboratories.laboratory_name');
            return response;
        } catch (error) {
            return error;
        }
    },

    insert: async (data) => {
        try {
            const { laboratory_name, address } = data;
            const response = await db('laboratories').insert({ laboratory_name, address });
            return response;
        } catch (error) {
            return error;
        }
    },


    update: async (data) => {
        try {
            const { id, laboratory_name, address, status_lab } = data;
            const response = await db('laboratories').where({ 'id': id }).update({ laboratory_name, status_lab, address });
            return response;
        } catch (error) {
            return error;
        }
    },

    delete: async (id) => {
        try {
            const response = await db('laboratories').whereIn( 'id', id ).update({ status_lab: "inativo", deleted_at: new Date() });
            return response;
        } catch (error) {
            return error;
        }
    },

    validActiveTrueLab: async (id) => {
        try {
            const response = await db('laboratories').where({ id: id, status_lab: "ativo" });
            return response;
        } catch (error) {
            return error;
        }
    }
}