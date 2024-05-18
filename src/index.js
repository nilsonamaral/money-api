import cors from "cors"
import express from "express"
import router from "./routers.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
})