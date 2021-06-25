const ExamsService = require('../services/ExamsService')

module.exports = {
        list: async (req, res) => {
                /* #swagger.tags = ['Exams']
                   #swagger.description = 'Endpoint para listar todos os exames' /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await ExamsService.list()
                return res.status(response.status_code).json(response);
        },

        insert: async (req, res) => {
                /*#swagger.tags = ['Exams']
                 #swagger.description = 'Endpoint para inserir exames' /
        
                /    #swagger.parameters['obj'] = {
                        in: 'body',
                        description: 'Informações do exame.',
                        required: true,
                        schema: { $ref: "#/definitions/InsertExams" }
                } /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await ExamsService.insert(req.body.exams)
                return res.status(response.status_code).json(response);
        },

        update: async (req, res) => {
                /*#swagger.tags = ['Exams']
                 #swagger.description = 'Endpoint para atualizar exames' /
        
                /    #swagger.parameters['array obj'] = {
                        in: 'body',
                        description: 'Informações do exame.',
                        required: true,
                        schema: { $ref: "#/definitions/UpdateExams" }
                } /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await ExamsService.update(req.body.exams)
                return res.status(response.status_code).json(response);
        },

        delete: async (req, res) => {
                /*#swagger.tags = ['Exams']
                 #swagger.description = 'Endpoint para deletar exames' /
        
                /    #swagger.parameters['obj'] = {
                        in: 'body',
                        description: 'Id dos exames.',
                        required: true,
                        schema: { $ref: "#/definitions/DeleteExams" }
                } /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await ExamsService.delete(req.body.id);
                return res.status(response.status_code).json(response);
        }
}
