export class Meetup {

    constructor(id: number , title: string , creationDate: string , guests: number, place: string, beerCrates: number ,users: any [], weather: string) {
        this.id = id,
        this.title = title;
        this.creationDate = creationDate;
        this.guests = guests,
        this.place = place,
        this.weather = weather;
        this.beerCrates = beerCrates; 
        this.users = users;
        
    }
    public id: number;
    public title: string;
    public creationDate: string;
    public guests: number;
    public place: string;
    public weather: string;
    public beerCrates: number;
    public users: string [];

}