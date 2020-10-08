export const add = (a,b) => a+b;
export const dic = (a,b) => a-b;

/*====================================*/


class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };

    print(){
        console.log(`Name: ${this.name} Email: ${this.email}`)
    }
}

export default Person;






/*====================================*/

import Person from './person.js'


class Student extends Person {
    constructor(name, email, id){
        super(name, email)
        this.id = id
    }

    print (){
        super.print()
       console.log(`ID:  ${this.id}`)
    }

}

export default Student;