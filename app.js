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

        getPath(
            'ИРИТ-РТФ', 
            4, 
            'd0ebc4f3-46d4-46fc-804b-7f59e9b5e512', 
            '91f57785-d2d8-43cf-b0cb-e6f2c6f05f37'
        ).then(e => console.log(e));

        app.listen(PORT, () => console.log(`Started, Port: ${PORT}`));
    } catch(e) {
        console.warn("Something went wrong", e.message);
        process.exit(1);
    }
}

start();