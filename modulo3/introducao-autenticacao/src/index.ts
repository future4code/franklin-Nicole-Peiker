import app from "./app"
import { Request, Response } from 'express'
import { teste } from './endpoints/teste'

app.get("/", teste)
