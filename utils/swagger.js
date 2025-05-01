import SwaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./utils/swagger.yaml'); 

export { SwaggerUI, swaggerDocument };

