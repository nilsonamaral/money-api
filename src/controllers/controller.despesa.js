import prismaClient from "../services/database.js"

const Listar = async (request, response) => {

    const config = {
        include: {
            categoriaDetalhe: true
        },
        orderBy: {
            id: "desc"
        }
    }

    const desp = await prismaClient.despesas.findMany(config)
    return response.json(desp)
}

const ListarId = async (request, response) => {

    const config = {
        include: {
            categoriaDetalhe: true
        },
        where: {
            id: Number(request.params.id)
        }
    }

    const desp = await prismaClient.despesas.findMany(config)
    return response.json(desp[0])
}

const Inserir = async (request, response) => {

    try {
        const {descricao, categoria, valor} = request.body

        const desp = await prismaClient.despesas.create({
            data: {
                descricao,
                categoria,
                valor
            }
        })
        return response.status(201).json(desp)
    } catch (error) {
        return response.status(500).send(error)
    }
}

const Editar = async (request, response) => {
    try {
        const {descricao, categoria, valor} = request.body
        const id = request.params.id

        const desp = await prismaClient.despesas.update({
            where: {
                id: Number(id)
            },
            data: {
                descricao,
                categoria,
                valor
            }
        })
        return response.json(desp)
    } catch (error) {
        return response.status(500).send(error)
    }
}

const Excluir = async (request, response) => {
    try {
        const id = request.params.id

        const desp = await prismaClient.despesas.delete({
            where: {
                id: Number(id)
            }
        })
        return response.json(desp)
    } catch (error) {
        return response.status(500).send(error)
    }
}

export default {Listar, ListarId, Inserir, Editar, Excluir}