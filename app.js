const express = require("express")
const config = require("config")
const mongoose = require("mongoose")

const app = express()
app.use("./api/auth", require("./routes/auth.routes"))

const PORT = config.get("port")

async function start() {
    try {
        await mongoose.connect(config.get("uri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Started, Port: ${PORT}`))
    } catch(e) {
        console.warn("Something went wrong", e.message)
        process.exit(1)
    }
}

start()