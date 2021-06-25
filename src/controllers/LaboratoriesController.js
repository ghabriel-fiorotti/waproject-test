const LaboratoriesService = require('../services/LaboratoriesService')

module.exports = {
        list: async (req, res) => {
                /* #swagger.tags = ['Laboratories']
                   #swagger.description = 'Endpoint para listar todos os laboratórios' /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await LaboratoriesService.list()
                return res.status(response.status_code).json(response);
        },

        insert: async (req, res) => {
                /*#swagger.tags = ['Laboratories']
                 #swagger.description = 'Endpoint para inserir laboratórios' /
        
                /    #swagger.parameters['obj'] = {
                        in: 'body',
                        description: 'Informações do laboratório.',
                        required: true,
                        schema: { $ref: "#/definitions/InsertLaboratories" }
                } /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await LaboratoriesService.insert(req.body.laboratories)
                return res.status(response.status_code).json(response);
        },

        update: async (req, res) => {
                /*#swagger.tags = ['Laboratories']
                 #swagger.description = 'Endpoint para atualizar laboratórios' /
        
                /    #swagger.parameters['obj'] = {
                        in: 'body',
                        description: 'informação dos laboratórios a serem excluídos.',
                        required: true,
                        schema: { $ref: "#/definitions/UpdateLaboratories" }
                } /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await LaboratoriesService.update(req.body.laboratories)
                return res.status(response.status_code).json(response);
        },

        delete: async (req, res) => {
                /*#swagger.tags = ['Laboratories']
                 #swagger.description = 'Endpoint para remover laboratórios' /
        
                /    #swagger.parameters['obj'] = {
                        in: 'body',
                        description: 'Id dos laboratórios a serem excluídos.',
                        required: true,
                        schema: { $ref: "#/definitions/DeleteLaboratories" }
                } /
        
                / #swagger.security = [{
                        "apiKeyAuth": []
                }] */
                const response = await LaboratoriesService.delete(req.body.id);
                return res.status(response.status_code).json(response);
        }
}
