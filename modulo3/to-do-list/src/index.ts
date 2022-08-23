import app from "./app";
import express, {Request, Response} from 'express'
import connection from "./connection";
import dotenv from "dotenv";
import {getUserById} from './endpoints/getUserbyId';


app.post("/user", async(req: Request, res:Response) => {
  let errorStatus = 500
  try {
    const {name, nickname, email} = req.body
    if(!name || !nickname || !email){
      errorStatus = 400
      throw new Error("É necessário preencher todos os dados para se cadastrar")
    }
    await connection("TodoListUser")
    .insert({
      id: Date.now().toString(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email, 

    }).into("TodoListUser")
    res.status(200).send('Usuário criado com sucesso.')
    //res.status(400).send('É necessario preencher todas as informações para criar a conta.')
    
  } catch (error: any) {
    console.log(error);
    res.status(errorStatus).send(error.message)
  }

})

app.get("/user/all", async(req: Request, res: Response) => {
  })

app.put("/user/edit/:id", (req, res)=>{
  try {
    
  } catch (error) {
    
  }
})

app.post("/task", (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

