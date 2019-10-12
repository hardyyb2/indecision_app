class Person {
    constructor(name = `Anonymous`, age = 10) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return this.name + ' yoho howdy'
    }

    getInfo() {
        return `${this.name } is ${this.age } years old`;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreetings() {
        let greetings = super.getGreetings();

        if (this.hasLocation()) {
            greetings += `. You are from ${this.homeLocation}`
        }
        return greetings;
    }

}


const hardik = new Traveller('hardik Badola', 20, 'yamunanagar')
const sh = new Traveller('yo', 21);

console.log(sh.getGreetings())
console.log(hardik.getGreetings())