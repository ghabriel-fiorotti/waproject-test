const swaggerAutogen = require('swagger-autogen')()
require('dotenv').config()

const doc = {
    info: {
        version: "1.0.0",
        title: "Project WA - Test",
        description: "Routes documentations."
    },
    host: process.env.URL_HOST,
    basePath: "",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Laboratories",
            "description": "Endpoints"
        },
        {
            "name": "Exams",
            "description": "Endpoints"
        },
        {
            "name": "Associations",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },

    definitions: {
        InsertExams: {
            exams: [
                {
                    $exam_name: "urina",
                    $type_exam: "analise clinica"
                },
                {
                    $exam_name: "fezes",
                    $type_exam: "analise clinica"
                }
            ]
        },
        UpdateExams: {
            exams: [
                {
                    $id: 1,
                    $exam_name: "Exame cardiológico",
                    $status_exam: "ativo",
                    $type_exam: "imagem"
                },
                {
                    $id: 2,
                    $exam_name: "Ultrassom",
                    $status_exam: "inativo",
                    $type_exam: "imagem"
                }
            ]
        },
        DeleteExams: {
            $id: [1, 2]
        },
        InsertLaboratories: {
            laboratories: [
                {
                    $laboratory_name: "SALA 05",
                    $address: "Superior"
                },
                {
                    $laboratory_name: "SALA 03",
                    $address: "Centro"
                }
            ]
        },
        UpdateLaboratories: {
            laboratories: [
                {
                    $id: 4,
                    $laboratory_name: "SALA 01",
                    $status_lab: "ativo",
                    $address: "Esquerda Superior"
                },
                {
                    $id: 3,
                    $laboratory_name: "SALA 02",
                    $status_lab: "inativo",
                    $address: "Direita Superior"
                }
            ]
        },
        DeleteLaboratories: {
            $id: [1, 2]
        },
        InsertAssociations: {
            $idLaboratories: [1, 2]
        },
        DeleteAssociations: {
            $idAssociations: [1, 2]
        }

    }
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server')           // Your project's root file
})