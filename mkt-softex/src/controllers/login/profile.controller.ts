import { Request, Response } from "express";




class ProfileController {
    async getProfile(req: Request, res: Response) {
        return res.json(req.user)
    }
}

export default new ProfileController();