export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

//modelo do DB
export interface IUserDB {
  id: string,
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
}

//modelo do negocio (codigo)
export class User {
  constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private role: USER_ROLES = USER_ROLES.NORMAL
    // se o role não for definido, por padrão pega o normal
  ) {}

  public getId = () => {
      return this.id
  }

  public getName = () => {
      return this.name
  }

  public getEmail = () => {
      return this.email
  }

  public getPassword = () => {
      return this.password
  }

  public getRole = () => {
      return this.role
  }

  public setId = (newId: string) => {
      this.id = newId
  }

  public setName = (newName: string) => {
      this.name = newName
  }

  public setEmail = (newEmail: string) => {
      this.email = newEmail
  }

  public setPassword = (newPassword: string) => {
      this.password = newPassword
  }

  public setRole = (newRole: USER_ROLES) => {
      this.role = newRole
  }
}

