import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express( ) 

app.use(express.json( )) 
app.use(cors( )) 

//ex1
app.get('/ping', (req:Request, res:Response)=>{
  res.status(200).send('Pong')
})

//ex2
app.get('/todos', (req:Request, res:Response)=>{
  res.status(201).send(toDoList);
})

//ex3
app.get('/todos/:status', (req:Request, res:Response)=>{
  const status:string = req.params.status
  if(status === 'completed'){
    toDoList.filter((todo:ToDo)=> todo.completed)
  }else{
    toDoList.filter((todo:ToDo)=> !todo.completed)
  }

})

// //ex4 - retorna com determinado status
// app.post('/todos/createtodo', (req:Request, res:Response)=>{
//   const {newToDo: ToDo} = req.body
//   const newToDoList: {}[] = [
//     ... toDoList, newToDo]
// })



// app.post('')

// type ToDo = {
//   userId: number,
//   id: number,
//   title: string,
//   completed: boolean
// }

// const toDoList: ToDo[] = [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//     {
//       "userId": 2,
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     },
//     {
//       "userId": 2,
//       "id": 5,
//       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//       "completed": false
//     },
//     {
//       "userId": 2,
//       "id": 6,
//       "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//       "completed": false
//     },
//     {
//       "userId": 3,
//       "id": 7,
//       "title": "illo expedita consequatur quia in",
//       "completed": false
//     },
//     {
//       "userId": 3,
//       "id": 8,
//       "title": "quo adipisci enim quam ut ab",
//       "completed": true
//     },
//     {
//       "userId": 3,
//       "id": 9,
//       "title": "molestiae perspiciatis ipsa",
//       "completed": false
//     },
//     {
//       "userId": 4,
//       "id": 10,
//       "title": "illo est ratione doloremque quia maiores aut",
//       "completed": true
//     },
//     {
//       "userId": 4,
//       "id": 11,
//       "title": "vero rerum temporibus dolor",
//       "completed": true
//     },
//     {
//       "userId": 4,
//       "id": 12,
//       "title": "ipsa repellendus fugit nisi",
//       "completed": true
//     },
//     {
//       "userId": 4,
//       "id": 13,
//       "title": "et doloremque nulla",
//       "completed": false
//     },
//     {
//       "userId": 5,
//       "id": 14,
//       "title": "repellendus sunt dolores architecto voluptatum",
//       "completed": true
//     },
//     {
//       "userId": 5,
//       "id": 15,
//       "title": "ab voluptatum amet voluptas",
//       "completed": true
//     },
//     {
//       "userId": 5,
//       "id": 16,
//       "title": "accusamus eos facilis sint et aut voluptatem",
//       "completed": true
//     }    
// ]

// app.put('/todos/:id', (req:Request, res:Response)=>{
//   const id: number = Number(req.params.id)
//   if (toDoList.find(toDo: ToDo => toDo.id === id)){

//   }
// })

// app.delete('todos/:id', (req, res) =>{
//   const id: number = Number(req.params.id)
//   if (toDoList.find((toDo: ToDo)=>toDo.id === id)){
    
// })

// app.get('/user/:userId/todos', (req:Request, res:Response)=>{
//   const userId:number = Number(req.params.userId)
//   if(toDoList.filter(toDo: ToDo=> toDo.userId === userId))
// })

app.listen(3003, ( ) => {console.log ('Server is running in localhost:3003')}) 
