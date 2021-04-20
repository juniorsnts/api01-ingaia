import express from 'express';
import dotenv from 'dotenv';
import middlewares from './middlewares';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import meterRouter from './routes/meter';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const options: Options = {
  definition: {
    info: {
      title: 'API01 INGAIA',
      version: '1.0.0',
    },
  },
  apis: ['**/*.ts'],
}

// middlewares
app.use(middlewares);

// swagger server
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// routers
app.use('/meter', meterRouter);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
