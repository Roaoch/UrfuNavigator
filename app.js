const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const getPath = require("./paths/way_finder.js")

const app = express();

const PORT = config.get("port");

async function start() {
    try {
        await mongoose.connect(config.get("uri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.get("/path", async (req, res) => {
            let points;
            await getPath(
                req.query.inst, 
                req.query.start, 
                req.query.end
            )
            .then(e => points = e);
            res.send(points);
        });

        app.listen(PORT, () => console.log(`Started, Port: ${PORT}`));
    } catch(e) {
        console.warn("Something went wrong", e.message);
        process.exit(1);
    }
}

start();