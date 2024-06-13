const express = require("express")
const serverConfig = require('./config/serverConfig')

const app = express()

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at port ${serverConfig.PORT}`)
    // console.log(process.env.PORT)
})


// localhost:3000 (socket address)