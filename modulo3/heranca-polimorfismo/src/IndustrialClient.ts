import { Industry } from './Industry'
import { Client } from './Client'

export class IndustrialClient extends Industry implements Client {
  constructor(
    private industrialRegistry: string, 
    machinesQuantity: number, 
    cep: string, 
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
  ){
    super(machinesQuantity,cep)
  }
  public getIndustrialRegistry(): string {
    return this.industrialRegistry 
  }

  public calculateBill() : number {
    return this.consumedEnergy * 0.45
  }
}