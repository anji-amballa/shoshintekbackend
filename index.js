const app = require("express");

app.get("/services",(req,res) => {
    try {
        const {service} = req;
        let data //query cames here
        if(data){
            res.status(400)
            res.send()
        }
    }
    catch {

    }
})