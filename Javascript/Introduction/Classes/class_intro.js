class Car {
    constructor(m , y , b , a) {
        this.car = m;
        this.year = y;
        this.speed = b;
        this.mileage = a;
    }
}

const car1 = new Car("MERCEDES" , 2012 , "1123km/h" , "5400CC");
const car2 = new Car("AUDI", 1999, "2333km/h", "5409CC");
const car3 = new Car("BMW", 1990, "50000km/h", "5900CC");
const car4 = new Car("FERRARI", 2000, "1233km/h", "1400CC");
const car5 = new Car("BUGATTI", 1989, "500000km/h", "15000CC");

console.log(car1.car + " " + car2.year + " " + car3.speed + " " +  car4.mileage);







class Subjects {
    constructor(g , b , o){
        this.marks = g;
        this.oppo = b;
        this.year = o;
    }

    age()
    {
          const date = new Date();
          return date.getFullYear() - this.year;
    }
}

const happy = new Subjects(99 , "F19" , 2006);
const sad = new Subjects(98 , "Reno 9" , 1999);


console.log(happy.age());









class Card {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

const asa = new Card("Mercedes");

console.log(asa.present()
