import { User } from './User'
import { Customer } from './Customer'
import { Client } from './Client'
import { Place } from './Place'
import { Residence } from './Residence'
import { Commerce } from './Commerce'
import { Industry } from './Industry'

//Exercício1
//a)Não seria possível imprimir pois o atributo senha é privado e não existe um metodo get para que possamos acessa-lo 
//b)O construtor foi chamado uma vez

const user = new User('0001', 'nicole@email.com', 'NIcole Peiker', 'nicole2022*')

console.log(user.getId())
console.log(user.getEmail())
console.log(user.getName())


//Exercício2
//a)A mensagem foi exibida uma unica vez
//a)O construtor User foi chamado uma vez, pois a classe Customer é uma subclasse de User, assim ao contrui-la o pai é chamado também

const customer = new Customer('002', 'rafa@email.com', 'Rafael Park', 'rafael2022*', '5502236574584125')


//Exercício 3
//a)Não seria possível imprimir pois senha é uma propriedade privada só acessivel internamente na classe user

console.log(customer.getId())
console.log(customer.getName())
console.log(customer.getEmail())
console.log(customer.purchaseTotal)
console.log(customer.getCreditCard())

//Exercício 4 e 5

console.log(customer.introduceYourself())

/***************POLIMORFISMO******************/
//Exercício 1
// Foi possível imprimir todas as propriedades pois nenhuma delas esta com modificador privado. 

const client: Client = {
  name: "Ana Maria",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

//Exercício 2
//a) error TS2511: Cannot create an instance of an abstract class.
// O erro apresentado diz que não é possível instanciar uma classe abstrata
// const place = new Place('85851800')
//b) retirar o abstract

//Exercício 3
const residence = new Residence(3, '80020040')
const commerce = new Commerce(1, '80020902')
const industry = new Industry(15, '82515940')

console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep())

console.log(residence.getResidentsQuantity())
console.log(industry.getMachinesQuantity())
console.log(commerce.getFloorsQuantity())

//Exercício 4
