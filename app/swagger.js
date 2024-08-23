import swaggerJsdoc from 'swagger-jsdoc'

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Next.js API Documentation',
        version: '1.0.0',
        description: 'API documentation using Swagger UI React in a Next.js app',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./app/**/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
