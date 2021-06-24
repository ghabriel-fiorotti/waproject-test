const ConsultationsService = require('../services/ConsultationsService')

module.exports = {

    list: async (req, res) => {
        const response = await ConsultationsService.list(req.params.exam)
        return res.status(response.status_code).json(response);
    },

    insert: async (req, res) => {
        const response = await ConsultationsService.insert(req.body.idLaboratories, req.params.idExam)
        return res.status(response.status_code).json(response);
    },
    remove: async (req, res) => {
        const response = await ConsultationsService.remove(req.body.idConsultations);
        return res.status(response.status_code).json(response);
    }
}