// No.1. Array destructuring
const numbers = [50, 45];
// const x=[0]
// const y=[1]
// const [x,y]=[50,45]

const [x, y] = numbers;

function boxify(num1, num2) {
  const num = [num1, num2];
  return num;
}
// const [first,second]=[88,91]
const [first, second] = [50, 45];

console.log(boxify(50, 45));

//No.2. Object destructuring

const { name, age } = { name: "Mehedi Hasan", age: 20 };
// const { name, age } = { id: 12, name: "Mehedi Hasan", salary: 25000, age: 20 };

const employ={
    ide:'VS Code',
    designation:'Developer',
    machine:'hp',
    language:['html', 'css', 'javascript'],
    specification:{
        height:66,
        weight:'80kg',
        address:'feni',
        drink:'water',
        watch:{
            name:'Ben 10',
            brand:'Apple',
            color:'black',
            price:1000,
        },
    }
    
}
const {machine,ide}=employ;
const {weight,address}=employ.specification;
const {brand}=employ?.specification?.watch;