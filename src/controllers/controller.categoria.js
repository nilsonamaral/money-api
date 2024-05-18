import prismaClient from "../services/database.js"
const Listar = async (request, reponse) => {

    const cat = await prismaClient.categoria.findMany()

    return reponse.json(cat)
}

export default {Listar}