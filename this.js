class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const kodom=new Person('kodom ali',25);
console.log(kodom)
kodom.sleep();
const badam=new Person('kaca babam',20);
console.log(badam);
badam.sleep();