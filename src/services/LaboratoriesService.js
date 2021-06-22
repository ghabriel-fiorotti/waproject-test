const LaboratoriesRepository = require('../repositories/LaboratoriesRepository')
require('dotenv').config()

module.exports = {
    list: async () => {
        let response;

        try {
            response = await LaboratoriesRepository.list();
            if (response.length === 0) {
                return { "message": "Nenhum resultado encontrado", "status_code": 200 }
            }
            return { "message": "Busca realizada com sucesso", "response": response, "status_code": 200 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422 }
        }
    },

    insert: async (data) => {
        try {
            const response = await LaboratoriesRepository.insert(data);
            return { "message": "Laboratório inserido com sucesso", "response": data, "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422 }
        }
    },

    update: async (data, id) => {
        try {
            const response = await LaboratoriesRepository.update(data, id)
            return { "message": "Laboratório atualizado com sucesso", "response" : data, "status_code": 200 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422, error }
        }
    },

    delete: async (id) => {
        try {
            const response = await LaboratoriesRepository.delete(id);
            return { "message": "Laboratório deletado com sucesso", "status_code": 200 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422, error }
        }
    }
}