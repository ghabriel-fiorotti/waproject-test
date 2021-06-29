const AssociationsService = require('../services/AssociationsService')

module.exports = {

    list: async (req, res) => {
        /* #swagger.tags = ['Associations']
           #swagger.description = 'Endpoint para listar todos os laboratórios vinculados a um exame passado o nome por parâmetro da rota' /

        / #swagger.security = [{
                "apiKeyAuth": []
        }] */
        const response = await AssociationsService.list(req.params.exam)
        return res.status(response.status_code).json(response);
    },

    insert: async (req, res) => {
        /*#swagger.tags = ['Associations']
         #swagger.description = 'Endpoint para inserir exames' /

        /    #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Id dos laboratórios a serem vinculados com o Id do exame por paramêtro da rota.',
                required: true,
                schema: { $ref: "#/definitions/InsertAssociations" }
        } /

        / #swagger.security = [{
                "apiKeyAuth": []
        }] */

        const response = await AssociationsService.insert(req.body.idLaboratories, req.params.idExam)
        return res.status(response.status_code).json(response);
    },
    remove: async (req, res) => {
        /*#swagger.tags = ['Associations']
         #swagger.description = 'Endpoint para inserir exames' /

        /    #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Id dos laboratórios a serem excluídos',
                required: true,
                schema: { $ref: "#/definitions/DeleteAssociations" }
        } /

        / #swagger.security = [{
                "apiKeyAuth": []
        }] */
        const response = await AssociationsService.remove(req.body.idAssociations);
        return res.status(response.status_code).json(response);
    }
}