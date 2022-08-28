import { JsonController, Param, Body, Get, Post, Put, Delete, Res, Req, UseBefore } from 'routing-controllers';
import { LoggingMiddleware } from '../middlewares/logging.middleware';

@JsonController('/home')
@UseBefore(LoggingMiddleware)
export class Home{

    @Get('/get')
    public getAll(){
        return 'Hello Users form node ...';
    }

}