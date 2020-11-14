import {plainToClass} from "class-transformer";
import {validateOrReject} from "class-validator";
import {Request, Response} from "express";
import UserRequestDto from "./request/userRequestDto";

export const createUser = async (req: Request, res: Response) => {
    const user: UserRequestDto = plainToClass(UserRequestDto, req.body);
    try {
        await validateOrReject(user, { skipMissingProperties: true });
    } catch (errors) {
        const errorMessages: string[] = [];
        for (const error of errors) {
            const errorMessage = error.toString();
            errorMessages.push(errorMessage);
        }

        res.status(400).send(errorMessages);
        return;
    }

    res.json(user);
};
