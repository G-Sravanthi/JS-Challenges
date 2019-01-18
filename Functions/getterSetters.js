const person = {
    firstName : 'Anil',
    lastName: 'Kumar',
    fullNmae(){
        return `${person.firstName} ${person.lastName}`;
    }
};

console.log(person.fullNmae); // will return the fullNmae function
console.log(person.fullNmae()); //will return Sunil Kumar

const employee = {
    firstName: 'Sunil',
    lastName: 'Kumar',
    get fullNmae(){
        // return (this.firstName +' '+ this.lastName); or
        // return `${this.firstName} ${this.lastName}`; or
        return `${employee.firstName} ${employee.lastName}`
    },
    set fullNmae(value){
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(employee.fullNmae);

employee.fullNmae = "Chandu Bapiraju";

console.log(employee.fullNmae);