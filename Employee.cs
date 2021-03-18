
class Employee{

    string name;
    string designation;
    string year;

    Employee(string _name, string _designation, string _year){
        this.name=name;
        this.designation=_designation;
        this.year=_year;
    }

    void CalculateAge(){
        console.log("age");
    }

}

class Main{

    void main(){
        Employee e= new Employee("Alex", "Developer", 1995);
        Employee e2= new Employee("Alex2", "Developer", 1996);
        Employee e3= new Employee("Alex3", "Developer", 1997);
    }
}