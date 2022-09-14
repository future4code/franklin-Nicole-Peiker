// export class Client{
//   public name: string;
//   public registrationNumber: number;
//   public consumedEnergy: number;

//   constructor(name: string, registrationNumber: number, consumedEnergy: number){
//     this.name = name;
//     this.registrationNumber = registrationNumber;
//     this.consumedEnergy = consumedEnergy;
//   }  

//   public calculateBill():number {
//   }
// }

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

// a interface funciona como um tipo, por isso é possível criar um objeto a partir dela