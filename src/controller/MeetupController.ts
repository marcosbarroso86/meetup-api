import { Request, response, Response } from "express";
import { MeetupService } from "../service/MeetupService";

export class MeetupController {

    private service: MeetupService

    constructor(){
        this.service = new MeetupService();
    }

    public getMeetups = (req:Request , res:Response) => {
        const { title } = req.query || null;
        this.service.getMeetups(title)
            .then( response => res.send(response) )
            .catch( e => res.send(e))
    }

    public createMeetups = (req:Request , res:Response) => {
        const data = req.body;
        this.service.createMeetups(data)
            .then( response => response.json() )
            .then( json => res.send(json) )
            .catch( e => res.send(e))
    }

    public updateMeetups = (req:Request , res:Response) => {
        const { id } = req.params;
        const users = req.body
        this.service.updateMeetups(id, users)
            .then( response => res.send(response) )
            .catch( e => res.send(e))
    }

    public getBeerCrates = (req:Request , res:Response) => {
        const { temperature , persons } = req.body;
        res.send({ beerCrates : this.service.getBeerCrates(temperature , persons) })
    }




}