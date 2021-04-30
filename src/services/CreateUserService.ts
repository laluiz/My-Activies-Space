import { getRepository } from "typeorm";
import {hash} from 'bcryptjs';
import{User} from '../model/User';


type UserData = {
    name: string;
    email: string;
    password: string
}

class CreateUserService {

    public async execute({name,email,password}:UserData) {

        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({email})

        if(checkUserExists){
            throw new Error('eamil adrres alread exist');

        }

        const hashedPassword = await hash(password, 8);
    
        const user = {

           name, 
           email,
           password: hashedPassword
        } 
    
        await usersRepository.save(user);
         return user;


        }

        
}

export {CreateUserService}