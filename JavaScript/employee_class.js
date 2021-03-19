

class Student {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    print() {
        console.log(`ID of Employee=${this.id} and Name of Employee=${this.name}`);
    }
}

const stud1 = new Student(101, "Alex");
const stud2 = new Student(102, "Annie");

stud1.print();
stud2.print();