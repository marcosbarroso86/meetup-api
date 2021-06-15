import { Console } from 'console';
import { Constants } from '../constants/Constants';
import { Connection } from '../firebase/Connection'
import { BeerCratesHandler } from '../handlers/BeerCratesHandler';
import { Meetup } from '../model/Meetup';

export class MeetupService {

    private firestore: any;

    constructor(){
        const connection:Connection = new Connection();
        this.firestore = connection.getFirestore();
    }
    
    public getMeetups = async (filter:string) => {
        const meetupRef = await this.firestore.collection(Constants.MEETUP_COLLECTION);
        let query = await meetupRef.orderBy('creationDate' , 'desc');
        const data =  await query.get()

        const meetups = [];

        data.forEach( document => {
            const meetup = new Meetup( 
                document.id, 
                document.data().title,
                document.data().creationDate,
                document.data().guests,
                document.data().place,
                document.data().beerCrates,
                document.data().users )
            meetups.push(meetup);
        });
        return filter ? meetups.filter( meetup => meetup.title.includes(filter)) : meetups;
    }
    
    public createMeetups = async (meetup: any) => {
        const meetupRef = this.firestore.collection(Constants.MEETUP_COLLECTION);
        const documentReference = await meetupRef.add(meetup);
        return documentReference;
    }

    public updateMeetups = async (id: string, users: any []) => {
        const meetupRef = this.firestore.collection(Constants.MEETUP_COLLECTION);

        await meetupRef.doc(id)
            .update({
                users 
            })
       
    }

    public getBeerCrates = (temperature: number , persons: number) => {
        return BeerCratesHandler.calculate(temperature , persons);
    }

}