import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import path from 'path';

let express = require('express'); // or you can import it if you have installed typings
let app = express(); // your created express server

const PORT = process.env.PORT || 3001;


// app.use() // you can configure it the way you want
useExpressServer(app, {
    middlewares: [path.join(__dirname + '/middleware/*.ts')],
    defaultErrorHandler: false,
    cors: {
        origin: ['http://localhost:3000','http://localhost:30001/','https://3001-brajeshpand-udharbacken-ojo69k8u80t.ws-us63.gitpod.io/'],
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    },
    routePrefix: '/api',
    // register created express server in routing-controllers
    controllers: [path.join(__dirname + '/controllers/*.ts')], // and configure it the way you need (controllers, validation, etc.)
});

// run express application on port 3000
app.listen(PORT,() => {
    console.log('Server is running...')   
});