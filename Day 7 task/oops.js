class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        
    }
};

const Casinoroyale1 = new Movie("casino royale", "Eon-productions", "PG-13");

console.log(Casinoroyale1);

class Moviename {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating

    }
    getPg(){
        return `The rating is: ${this.rating}`;
    }
    withdraw(amount){
        this.rating = this.rating - amount;
        return this.getPg();

    }
    withdraw(amount){
        this.rating= this.rating >= amount;
        return `the rating is insufficient: ${this.getPg()}`;
    }

        
    }


const Casinoroyale = new Moviename("Casino Royale", "Eon Production", "PG-13");
// const Missionimpossible = new Moviename("Mission impossible", 1001, 2_00_00_000);
// const Tommorowneverdies = new Moviename("Tommorow never dies", 1002, 5_00_000);

console.log(Casinoroyale);
// console.log(Missionimpossible);
// console.log(Tommorowneverdies);

console.log(Casinoroyale.rating);


console.log(Casinoroyale.getPg());
// console.log(Missionimpossible.getPg());
// console.log(Tommorowneverdies.getPg());


// console.log(sanjin.withdraw(50_000));

// console.log(sanjin.getBalance());

// console.log(sanjin.withdraw(50_000));
// console.log(manju.withdraw(1_00_00_000));
// console.log(sanjin.withdraw(10_00_000));

class person {
    constructor(Name, Age, Sex, Martial_status, City, Country) {
        this.Name = Name;
        this.Age = Age;
        this.Sex = Sex;
        this.Martial_status = Martial_status;
        this.City = City;
        this.Country = Country;
        
    }
};

const details = new person("Venkatesh", "35", "Male", "Married", "Chennai", "India");

console.log(details);

