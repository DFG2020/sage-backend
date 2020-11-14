import express from "express";
import { createUser } from "./controller/userController";

const app = express();

app.use(express.json());

// TODO: Add real controllers.
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
});

app.post("/user", createUser);

export default app;
