const ExamsService = require('../services/ExamsService')
require('dotenv').config()

module.exports = {
    list: async (req, res) => {
        const response = await ExamsService.list()
        return res.status(response.status_code).json(response);
    },

    insert: async (req, res) => {
        const response = await ExamsService.insert(req.body)
        return res.status(response.status_code).json(response);
    },

    update: async (req, res) => {
        console.log(req.params.id)
        const response = await ExamsService.update(req.body, req.params.id)
        return res.status(response.status_code).json(response);
    },

    delete: async (req, res) => {
        const response = await ExamsService.delete(req.params.id);
        return res.status(response.status_code).json(response);
    }
}
