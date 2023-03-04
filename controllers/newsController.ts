import { Request, Response } from 'express';
import newsServices from '../services/newsServices';

class newsController {
    get(req: Express.Request, res: Express.Response) { }
    getById(req: Express.Request, res: Express.Response) { }
    update(req: Express.Request, res: Express.Response) { }
    delete(req: Express.Request, res: Express.Response) { }
}

export default new newsController();