const LaboratoriesService = require('../services/LaboratoriesService')

module.exports = {
    list: async (req, res) => {
        const response = await LaboratoriesService.list()
        return res.status(response.status_code).json(response);
    },

    insert: async (req, res) => {
        const response = await LaboratoriesService.insert(req.body.laboratories)
        return res.status(response.status_code).json(response);
    },

    update: async (req, res) => {
        const response = await LaboratoriesService.update(req.body.laboratories)
        return res.status(response.status_code).json(response);
    },

    delete: async (req, res) => {
        const response = await LaboratoriesService.delete(req.body.id);
        return res.status(response.status_code).json(response);
    }
}
