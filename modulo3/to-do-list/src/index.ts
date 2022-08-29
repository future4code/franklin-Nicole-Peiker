import app from "./app";
import {Request, Response} from 'express'
import connection from "./connection";

app.get("/user/all", async(req: Request, res: Response) => {
  let errorStatus = 500
  try {
    const result = await connection("TodoListUser").select()
    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
})

app.post("/user", async(req: Request, res:Response) => {
  let errorStatus: number = 500
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
    
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }

})

app.get("/user/:id", async(req: Request, res: Response) => {
  let errorStatus: number= 500
  try {
    const id:string = req.params.id
    const result = await connection("TodoListUser")
      .select()
      .where("id", id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
  })

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const id:string = req.params.id
    const result = await connection("TodoListUser")
      .update(req.body)
      .where("id", id)
    res.send("Alterações efetuadas com sucesso")
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
})

app.post("/task", async (req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const {title, description, limitDate, creatorUserId} = req.body
    const formatedDate:string = limitDate.split('/').reverse().join("-")
    if(!title || !description || !limitDate || !creatorUserId){
      errorStatus = 400
      throw new Error("É necessário preencher todos os dados para cadastrar uma tarefa")
    }
    await connection("TodoListUser")
      .insert(
        {
          "title": title,
          "description": description,
          "limitDate": formatedDate,
          "creatorUserId": creatorUserId 
        }
      )
      .into("Task")
      res.status(200).send("Tarefa cadastrada com sucesso.")
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
})

app.get("/task/:id", async (req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const id = req.params.id
    const result = await connection("Task")
      .select("Task.id as taskId", "Task.title", "Task.description", "Task.limitDate", "Task.status", "Task.creatorUserId", "TodoListUser.nickname")
      .from('Task')
      .join("TodoListUser", "Task.creatorUserId", "TodoListUser.id")
      .where("Task.id", id)
    res.status(200).send(result)
  } catch (error:any) {
    res.status(errorStatus).send(error.message)
  }
})

app.get("/task", async (req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const id = req.query.creatorUserId
    const result = await connection("Task")
      .select("Task.id as taskId", "Task.title", "Task.description", "Task.limitDate", "Task.status", "Task.creatorUserId", "TodoListUser.nickname")
      .from('Task')
      .join("TodoListUser", "Task.creatorUserId", "TodoListUser.id")
      .where("creatorUserId", id)
    res.status(200).send(result)
  } catch (error:any) {
    res.status(errorStatus).send(error.message)
  }
})
