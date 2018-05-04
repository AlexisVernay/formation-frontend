let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "paris";

console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

console.log(citiesId);

//citiesId = [];

citiesId.push("tokyo");

console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city: city, temperature: temperature};
}

const weather = getWeather(favoriteCityId);

console.log(weather);

const city = weather.city;
const temperature = weather.temperature;
console.log(city);
console.log(temperature);

const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

console.log(parisTrip);
console.log(parisTrip.name);

console.log(parisTrip.toString());
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString() {
        console.log(`Free${super.toString()}`);
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

freeTrip.toString();


class TripService {

    constructor() {
        // TODO Set of 3 trips
        this.Trips = new Set();
        let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg')
        let trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.Trips.add(trip1);
        this.Trips.add(trip2);
        this.Trips.add(trip3);
    }

    findByName(tripName) {
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                let trip = [...this.Trips].filter(trip => trip.name == tripName).pop();
            
                if(trip) {
                    console.log("Trip found :", trip);
                    return trip;
                } else {
                    console.log(`No trip with name ${tripName}`);
                }
            }, 2000);      
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        this.prices = new Map();
        this.prices.set("paris", 100);
        this.prices.set("rio-de-janeiro", 800);
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                let trip = this.prices.get(tripId);
            
                if(trip) {
                    console.log(`Price found : ${trip}`);
                    return trip;
                } else {
                    console.log(`No price for trip id ${tripId}`);
                }
            }, 2000); 
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService
  .findByName("Paris")
  .then(console.log)
  .catch(console.log);

tripService.findByName("Toulouse");

priceService
  .findPriceByTripId("rio-de-janeiro")
  .then(console.log)
  .catch(console.log);

priceService
  .findPriceByTripId("nantes")
  .then(console.log)
  .catch(console.log);
