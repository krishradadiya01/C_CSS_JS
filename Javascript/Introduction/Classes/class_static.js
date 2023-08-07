class Zombie {
  constructor(j, m, z) {
    this.mj = j;
    this.lok = m;
    this.mnb = z;
  }

  static present2() {
    return "I am" + this.mj;               // wont't work
  }
}

const jems = new Zombie("Envitable")      //  Don't work because of Static (sthir) keyword.

console.log(Zombie.present2())
