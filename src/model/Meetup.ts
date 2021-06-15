export class Meetup {

    constructor(id: number , title: string , creationDate: string , guests: number, place: string, beerCrates: number ,users: any []) {
        this.id = id,
        this.title = title;
        this.creationDate = creationDate;
        this.guests = guests,
        this.place = place,
        this.beerCrates = beerCrates; 
        this.users = users
        
    }
    public id: number;
    public title: string;
    public creationDate: string;
    public guests: number;
    public place: string;
    public beerCrates: number;
    public users: string [];

}