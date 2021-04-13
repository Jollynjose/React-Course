class Human{
    constructor(gender){
        this.gender=gender;
    }
}

class Person extends Human{
    constructor(name, gender){
        super(gender);
        this.name = name;
    }
    callMe=()=>{
        console.log(`Hi duce, Im ${this.name} and im a ${this.gender}`);
    }
}
const person1= new Person('Jollyn','male');
person1.callMe();