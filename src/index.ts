import app from "./app";

// TODO: move to environment variable or configuration.
const port = 8080;

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
