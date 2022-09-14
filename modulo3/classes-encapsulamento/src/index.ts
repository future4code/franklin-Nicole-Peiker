// EXERCICIO 1

// A) O construtor serve como um molde pra criar um objeto daquela classe. Para chamalo escrevemos new e o nome da classe em seguida

//B) 1 vez

//C) Atraves dos métodos getters e setters

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number
  ){
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
  public getCpf(): string {
    return this.cpf;
  }
  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public getBalance(): number {
    return this.balance;
  }
  public getTransactions(): Transaction[]{
    return [... this.transactions];
  }
  public setTransactions(newTransaction:Transaction):void{
    this.transactions.push(newTransaction)
  }
}

const userAccount = new UserAccount('04700585989', 'Nicole', 68)


class Transaction{
  private description: string
  private value: number
  private date: string

  constructor(  description: string, value: number, date: string){
    this.description = description
    this.value = value
    this.date = date
  }

  public getDescription():string{
    return this.description
  }
  public getValue():number{
    return this.value
  }
  public getDate():string{
    return this.date
  }
}

const userTransaction = new Transaction('deposito', 150, '2022-08-30')

userAccount.setTransactions(userTransaction)

console.log(userAccount.getBalance())

class Bank {
  private accounts: UserAccount[] = []

  public getAccounts(): UserAccount[] {
    return [... this.accounts]
  }
  public addAccount(newAccount: UserAccount): void {
    this.accounts.push(newAccount)
  }
  public removeAccount(account: UserAccount): void {
  }
}