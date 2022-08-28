import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import path from 'path';
import {origin , PORT} from './config/appConstant'





let express = require('express');
let app = express();

useExpressServer(app, {
    middlewares: [path.join(__dirname + '/middleware/*.ts')],
    defaultErrorHandler: false,
    cors: {
        origin: origin,
        optionsSuccessStatus: 200
    },
    routePrefix: '/api',
    controllers: [path.join(__dirname + '/controllers/*.ts')],
});

app.listen(PORT,() => {
    console.log('Server is running...')   
});