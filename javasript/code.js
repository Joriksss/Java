/*
const developer = {
    name: "Aleksandr",
    salary: 100000,

    getBonus (sum)
    {
        console.log(this.name, "Получит зарплату в этом месяце", this.salary + sum)

    }
}
const manager = {
    name: "Petr",
    salary: 10000,
}

const rab = {
    name: "Ivan",
    salary: 5000,
}

//developer.getBonus.call(manager, 5000)

manager.getBonus = developer.getBonus.bind(manager)
rab.getBonus = developer.getBonus.bind(rab)
manager.getBonus(5000)
rab.getBonus(1500)
developer.getBonus(25000)
*/

/*
const table = [1,2,3,4,5]
console.log(table)

const newtable = [0,24, ...table]
console.log(newtable)
*/

/*
const numbers = [1,2,3,4,5,6,7,8]

function doublenum(num){
    return num*2
}

const result = numbers.map(doublenum)
console.log(result)
console.log(numbers)
*/

/*
const user = [
    {
        id:1,
        name: "Grisha",
        education:['school', 'college', "university"],
        isAdmin: true,
    },
    {
        id:2,
        name: "Masha",
        education:['school', 'college', "university", "master"],
        isAdmin: false,
    },
    {
        id:3,
        name: "Oleg",
        education:['school', 'college'],
        isAdmin: true,
    },
    {
        id:4,
        name: "Mickle",
        education:['school', 'college', "university"],
        isAdmin: false,
    },
]

const userAdmin = user.filter(user => user.education.includes("master"));
console.log(userAdmin)
*/

/*
const staff = {
    id: 1,
    name: "George",
    skills: ["js", "HTML", "C", "JAVA"],
    position: "frontend"
}

const dev = {...staff}
dev.id = 5;
dev.name = "Vlad";
dev.position = "fullstack";
dev.skills = "C++"

console.log(staff);
console.log(dev);
*/

/*
const cities= ["Moskow","Vladivostok","Khabarovsk","Ussuriisk","Artem",'Nahodka'];
const [MSK, VLK, KHV, ...line] = cities;

console.log(VLK, ...line)
console.log(VLK, line)
*/

/*
const developer = {
    id: 1, 
    name: "Alexsandr",
    skill: ['JS', 'CSS', 'HTML', 'C++', 'JAVA'],
    position: "fullstack",
    languege: {
        english: "A2",
        chainess: "E3",
        spanish: "B1",
    }
};
const {skill, name, position, languege} = developer;
console.log(skill, position, name, languege.chainess);
*/

/*
const firstname = "Arthur";
const lastname = "Gulev";

function minus(a,b) {
    return(a-b)
}

const MyAge = minus (2023, 2006)

console.log(`Привет! Меня зовут ${firstname} ${lastname}. Мне  ${MyAge} года. `)
*/

/*
class Person {
    name;
    age;
    print()
    {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`)
    }
}

const Arthur = new Person();
Arthur.name = "Артур";
Arthur.age = 17;
Arthur.print();

const Aleksandr = new Person();
Aleksandr.name = "Александр";
Aleksandr.age = 21;
Aleksandr.print();
*/

/*
class Car {
    Model;
    Year;
    Type;
    Price;
    print()
    {
        console.log(`Ваша любимая машина: ${this.Model} ${this.Type} ${this.Year}, Она стоит: ${this.Price} $`)
    }
    print2()
    {
        console.log(`Ваша нелюбимая машина: ${this.Model} ${this.Type} ${this.Year}, Она стоит: ${this.Price} $`)
    }
}

const favorite = new Car();
favorite.Model = "Chevrolet"
favorite.Year = 1967;
favorite.Type = "Impala";
favorite.Price = 10000;
favorite.print();

const unfavorite = new Car();
unfavorite.Model = "BMW"
unfavorite.Year = 2012;
unfavorite.Type = "M5";
unfavorite.Price = 20000;
unfavorite.print2();
*/

/*
class Date {
    constructor(year, month, day){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    toString(){
        return `Дата на сегодня: ${this.day}.${this.month}.${this.year}`
    }
}

const today = new Date(2022, 10, 13)
console.log(today.toString())
*/

/*
class Person {
    name;
    age;

}

class Employee extends Person{
    company;
    print()
    {
        console.log(`Name: ${this.name}, age: ${this.age} and work in ${this.company}`)
    }
}

const Bob = new Employee(); - наследие 
Bob.name = "Bob";
Bob.age = 25;
Bob.company = "Google";
Bob.print();
*/





