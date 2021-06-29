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
            for (let index = 0; index < data.length; index++) {
                const response = await LaboratoriesRepository.insert(data[index]);
            }
            return { "message": "Laboratório(s) inserido(s) com sucesso", "response": data, "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422 }
        }
    },

    update: async (data) => {
        try {
            for (let index = 0; index < data.length; index++) {
                const response = await LaboratoriesRepository.update(data[index])
            }
            return { "message": "Laboratório(s) atualizado(s) com sucesso", "response": data, "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422, error }
        }
    },

    delete: async (id) => {
        try {  
            let verifyId = await LaboratoriesRepository.verifyId(id);
            if(verifyId.length < 1){
                return { "message": "Laboratórios inválidos", "status_code": 422 }
            }
            const response = await LaboratoriesRepository.delete(id);
            console.log(response);
            return { "message": `Laboratório(s) deletado(s) com sucesso : ${response}`, "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422, error }
        }
    }
}