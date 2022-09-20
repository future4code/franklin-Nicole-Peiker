export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getEmail = () => {
    return this.email;
  };

  public getPassword = () => {
    return this.password;
  };
}

export interface ISignupInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface ITokenOutputDTO {
  message: string;
  token: string;
}
