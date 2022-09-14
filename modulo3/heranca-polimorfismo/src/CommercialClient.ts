import { Commerce } from './Commerce'
import { Client } from './Client'

export class CommercialClient extends Commerce implements Client {
  constructor( 
    private cnpj: string, 
    floorsQuantity: number,
    cep: string, 
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
    ){
      super(floorsQuantity, cep)
    }
    getCnpj(): string { 
      return this.cnpj
    }
    calculateBill():number{
      return this.consumedEnergy * 0.53
    }
}
