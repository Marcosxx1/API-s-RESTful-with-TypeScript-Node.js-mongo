import { Request, Response } from 'express';
import newsServices from '../services/newsServices';
import * as HttpStatus from "http-status";





class newsController {
    sendResponse = function (res, statusCode, data) {
        res.status(statusCode).json({ reult: data });
    }

    get(req: Request, res: Response) {
        newsServices.get()
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }
    getById(req: Request, res: Response) {
        const _id = req.params._id;
        newsServices.getById(_id)
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }


    update(req: Request, res: Response) {
        const _id = req.params._id;

        // newsServices.update()
    }
    delete(req: Request, res: Response) { }
}

export default new newsController();