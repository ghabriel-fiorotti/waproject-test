const ConsultationsService = require('../services/ConsultationsService')

module.exports = {
    insert: async (req, res) => {
        const response = await ConsultationsService.insert(req.body.idLaboratories, req.params.idExam)
        return res.status(response.status_code).json(response);
    },
    remove: async (req, res) => {
        const response = await ConsultationsService.remove(req.body.idConsultations);
        return res.status(response.status_code).json(response);
    }
}