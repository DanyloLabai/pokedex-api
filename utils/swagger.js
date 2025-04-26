import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUI from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Pokedex API',
        version: '1.0.0',
        description: 'Документація для твого Pokedex проекту',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT || 3000}`, 
        },
      ],
    },
    apis: ['./routes/*.js'], 
  };

  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  export {SwaggerUI , swaggerSpec};

