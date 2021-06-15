export class BeerCratesHandler {

    public static calculate = (temperature: number , persons: number) => {
        
        let count: number = 0;
        if (temperature >= 20 && temperature <= 24) {
            count = persons / 6;
        } else if (temperature < 20) {
            count = persons * 0.75 / 6
        } else if (temperature > 20) {
            count = persons * 2 / 6
        }
        return Math.ceil(count);
    }

}