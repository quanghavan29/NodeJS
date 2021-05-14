import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const findAll = async (req: Request, res: Response): 
  Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
};

export const findOne = async (req: Request, res: Response):
  Promise<Response> => {
    const id = parseInt(req.params.id);
    const user = await getRepository(User).findOne(id);
    return res.json(user);
};

export const insert = async (req: Request, res: Response):
  Promise<Response> => {
    const newUser = await getRepository(User).create(req.body);
    const result = await getRepository(User).save(newUser);
    return res.json(result);
};

export const update = async (req: Request, res: Response):
  Promise<Response> => {
    const id = parseInt(req.params.id);
    const user = await getRepository(User).findOne(id);
    if (user) {
      getRepository(User).merge(user, req.body);
      const result = await getRepository(User).save(user);
      return res.json(user);
    } else {
      return res.status(404).json({msg: 'Not found user!'});
    }
};

export const remove = async (req: Request, res: Response):
  Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    const result = await getRepository(User).delete(req.params.id);
    return res.json({result : user});
};

