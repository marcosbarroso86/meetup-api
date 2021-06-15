import { MeetupController } from "../controller/MeetupController";

export class Router {

    private routes: any;
    private controller:MeetupController

    constructor(){
        this.controller = new MeetupController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/meetups')
        .get(this.controller.getMeetups)
        .post(this.controller.createMeetups)

        this.routes.route('/meetups/:id')
        .put(this.controller.updateMeetups)

        this.routes.route('/meetups/beer-crates')
        .post(this.controller.getBeerCrates)

    }

    public getRoutes(){
        return this.routes;
    }

}

