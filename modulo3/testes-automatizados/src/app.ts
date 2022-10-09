import express, { Express } from 'express';
import { AddressInfo, Server } from 'net';

const app: Express = express();
app.use(express.json());

const server: Server = app.listen(process.env.PORT || 3003, (): void => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
export default app;
