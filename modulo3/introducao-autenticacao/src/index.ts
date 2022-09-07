import app from "./app"
import { Request, Response } from 'express'
import { teste } from './endpoints/teste'
import { createUser } from "./endpoints/createUser"

app.get("/", teste)
app.post('/user/signup', createUser)
