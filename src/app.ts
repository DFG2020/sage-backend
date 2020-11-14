import express from "express";

const app = express();

// TODO: Add real controllers.
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
});

export default app;
