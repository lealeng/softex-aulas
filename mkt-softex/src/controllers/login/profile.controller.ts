import { Request, Response } from "express";


class ProfileController {
    async getProfile(req: Request, res: Response) {
        try {
            const { authorization } = req.headers

            if (!authorization) {
                return res.status(401).json('Não autorizado')
            }
            console.log(authorization);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao validar' })
        }
    }
}

export default new ProfileController();