const ConsultationsRepository = require('../repositories/ConsultationsRepository');
const LaboratoriesRepository = require('../repositories/LaboratoriesRepository');
const ExamsRepository = require('../repositories/ExamsRepository');


module.exports = {

    list: async (exam) => {
        try {
            console.log(exam);
            const response = await LaboratoriesRepository.listJoin(exam);

            return { "message": "Busca realizada com sucesso", "response": response, "status_code": 200 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422 }
        }
    },

    insert: async (data, idExam) => {
        try {
            const activeTrueExam = await ExamsRepository.validActiveTrueExam(idExam);
            if (activeTrueExam.length == 0) {
                return { "message": "Exame inativo ou inexistente", "response": data, "status_code": 400 }
            }
            let activeLaboratories = [];
            for (let index = 0; index < data.length; index++) {
                const activeTrueLab = await LaboratoriesRepository.validActiveTrueLab(data[index]);

                if (activeTrueLab.length != 0) {
                    activeLaboratories.push(data[index]);
                    const response = await ConsultationsRepository.insert(data[index], idExam);
                }
            }
            if (activeLaboratories.length == 0) {
                return { "message": "Os laboratórios não existem ou estão inativos", "status_code": 401 }
            }
            return { "message": `O(s) laboratório(s) ${activeLaboratories} foi(foram) vinculado(s) com sucesso ao exame ${idExam}`, "response": activeLaboratories, "status_code": 201 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422 }
        }
    },

    remove: async (idConsultations) => {
        try {
            for (let index = 0; index < idConsultations.length; index++) {

                const response = await ConsultationsRepository.remove(idConsultations[index]);
            }
            return { "message": "Consulta(s) deletada com sucesso", "status_code": 200 }
        } catch (error) {
            return { "message": "Erro no banco de dados", "status_code": 422, error }
        }
    }
}