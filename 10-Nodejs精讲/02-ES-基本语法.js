let num = 10;
num = 11;
const abc = 123;
// abc = 345;
console.log(abc)

//
// function sum(a, b, c=10) {
//     return a + b + c;
// }
//
// console.log(sum(1, 3));


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    run() {
        console.log(this.name, "跑")
    }
}

let p = new Person("sz", 18)
console.log(p);
p.run()

