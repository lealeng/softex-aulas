import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";

type JwtPayload = {
    id: number
}

export const authMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json('Não autorizado')
        }

        const token = authorization.split(' ')[1]

        const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

        const user = await prisma.user.findUnique({
            where: { id }
        })

        if (!user) {
            return res.status(401).json('Não autorizado')
        }

        const { password: _, ...loggedUser } = user

        req.user = loggedUser

        next()

    } catch (error) {
        return res.status(500).json({ message: 'Erro ao validar' })
    }

}


