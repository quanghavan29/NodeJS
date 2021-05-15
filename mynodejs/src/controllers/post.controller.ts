import { Request, Response } from 'express';
import { getManager, getRepository } from 'typeorm';
import { Post } from '../entity/Post';
import { User } from '../entity/User';

export const findAll = async (req: Request, res:Response):
    Promise<Response> => {
        const posts = await getRepository(Post).find();
        return res.json(posts);
};

export const findByUser = async (req: Request, res:Response):
    Promise<Response> => {
        const userId = parseInt(req.params.user_id);
        const posts = await getManager()
            .createQueryBuilder(User, 'u')
            .select('u.id, u.name')
            .addSelect('p.id, p.content, p.image, p.user_id')
            .innerJoin(Post, 'p', 'u.id = p.user_id')
            .where('u.id = ' + userId).getRawMany();
        return res.json(posts);
};