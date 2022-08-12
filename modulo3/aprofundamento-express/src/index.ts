import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express( ) 

app.use(express.json( )) 
app.use(cors( )) 

type ToDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

//ex3
const toDoList: ToDo[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 2,
      "id": 1,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 2,
      "id": 2,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 2,
      "id": 3,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 3,
      "id": 1,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 3,
      "id": 2,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 3,
      "id": 3,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 4,
      "id": 1,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 4,
      "id": 2,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 4,
      "id": 3,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 4,
      "id": 4,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 5,
      "id": 1,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 5,
      "id": 2,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 5,
      "id": 3,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    }    
]


//ex1
app.get('/ping', (req:Request, res:Response)=>{
  res.status(200).send('Pong')
})

//ex2
app.get('/todos', (req:Request, res:Response)=>{
  res.status(201).send(toDoList);
})

//ex4
app.get('/todos/:status', (req:Request, res:Response)=>{
  const status:string = req.params.status
  if(status === 'completed'){
    return res.send(toDoList.filter((todo:ToDo)=> todo.completed))
  }else{
    return res.send(toDoList.filter((todo:ToDo)=> !todo.completed))
  }

})

//ex5
app.post('/todos/createtodo', (req:Request, res:Response)=>{
  const newToDo: ToDo = req.body
  
  const newToDoList: {}[] = [
    ... toDoList, newToDo]
  res.send(newToDoList)
})

//ex6
app.put('/todos/:userId/:id', (req:Request, res:Response)=>{
  const userId: number = Number(req.params.userId)
  const id: number = Number(req.params.id)

  const toDoUserList: ToDo[] = toDoList.filter(user => user.userId === userId)

  toDoUserList.forEach(toDo=> {
    if(toDo.id === id){
      (toDo.completed? (toDo.completed = !toDo.completed) : (toDo.completed = !toDo.completed))
    }
  });
  res.send('Status modified')
})

//ex7
app.delete('/todos/:userId/:id', (req:Request, res:Response) => {
  const userId: number = Number(req.params.userId)
  const id: number = Number(req.params.id)

  const toDoUserList: ToDo[] = toDoList.filter(user => user.userId === userId)

  const newUserToDoList = toDoUserList.filter(todo => todo.id !== id)

  res.send(newUserToDoList)
    
  } 
)

//ex8

app.get('/user/:userId/todos', (req:Request, res:Response)=>{
  const userId: number = Number(req.params.userId)
  const id: number = Number(req.params.id)

  const toDoUserList: ToDo[] = toDoList.filter(user => user.userId === userId)

  res.send(toDoUserList)

})

app.listen(3003, ( ) => {console.log ('Server is running in localhost:3003')}) 
