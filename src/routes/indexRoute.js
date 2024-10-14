const {Router} = require("express");
const route = Router();

route.get("/",  (req, res) => {
    res.send("Ola dev")
}

)



module.exports = route;