import app from "./app";
import {Request, Response} from 'express'
import connection from "./connection";
import { getAllUser } from "./endpoints/getAllUsers";
import { createUser } from "./endpoints/createUser";
import { getUserById } from "./endpoints/getUserById";
import { updateUserById } from "./endpoints/updateUserById";
import { createTask } from "./endpoints/createTask";
import { getAllUserTasks } from "./endpoints/getAllUserTasks"
import { getTaskById } from "./endpoints/getTaskById";


app.get("/user/all", getAllUser)
app.post("/user", createUser)
app.get("/user/:id", getUserById)
app.put("/user/edit/:id", updateUserById)
app.post("/task", createTask)
app.get("/task", getAllUserTasks)
app.get("/task/:id", getTaskById)