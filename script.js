//1

const [name, surename, dapartment, position, salary] = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];
function func(emp) {
let [name, surename, info] = data

console.log(name, surename, info);
}    
func(data)


//2

const data2 = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000]
function func(emp){

let name = emp[0]
let surename = emp[1]
let dapartment = emp[2]
let = emp[3]

console.log( name, surename, dapartment, position);
}
func(data2)


