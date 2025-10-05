import swaggerJsdoc from 'swagger-jsdoc';
import { UserModel } from './model/users.model';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Title',
            version: '1.0.0',
            description: 'A description of your API',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Your API base URL
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                // Define your data models here (e.g., User, Product)
                User: UserModel.schema.obj,
            },
        },
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Paths to your API files with JSDoc comments
};

const specs = swaggerJsdoc(options);
export default specs;