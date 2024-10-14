const express = require("express");
const indexRoute = require("./src/routes/indexRoute");

class App{
    constructor(){
        this.app = express();
        this.routes();
    }
    routes(){
        this.app.use("/", indexRoute)
    }
}

module.exports = new App().app;