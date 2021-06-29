const ExamsRepository = require('../repositories/ExamsRepository')
require('dotenv').config()

module.exports = {
    list: async () => {
        let response;

        try {
            response = await ExamsRepository.list();
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
            let noExistExam = [];
            for (let index = 0; index < data.length; index++) {
                const existExam = await ExamsRepository.verifyExist(data[index].exam_name);
                if (existExam.length == 0) {
                    noExistExam.push(data[index].exam_name);
                    const response = await ExamsRepository.insert(data[index]);
                }
            }
            if (noExistExam.length == 0) {
                return { "message": "Todos os exames já existem no banco de dados", "response": data, "status_code": 422 }
            }
            return { "message": `Exame(s) ${noExistExam} inserido(s) com sucesso`, "response": data, "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422 }
        }
    },

    update: async (data) => {
        try {
            for (let index = 0; index < data.length; index++) {
                const response = await ExamsRepository.update(data[index]);
            }
            return { "message": "Exame(s) atualizado(s) com sucesso", "response": data, "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422, error }
        }
    },

    delete: async (id) => {
        try {
            let verifyId = await ExamsRepository.verifyId(id);
            console.log(verifyId.length);
            if(verifyId.length < 1){
                return { "message": "Exames inválidos", "status_code": 422 }
            }
            const response = await ExamsRepository.delete(id);
            return { "message": "Exames(s) deletado(s) com sucesso", "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422, error }
        }
    }
}