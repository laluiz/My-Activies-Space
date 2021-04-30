import {request, Request, Response} from 'express';
import {CreateUserService} from '../services/CreateUserService';

interface CourseUnitData {
    name: string;
    description: string;
}

class CourseUnitController {
    async create(request:Request, response:Response) {
        const userData = request.body
        
        const createUser = new CreateUserService()
        
        const user = await createUser.execute(userData);
        
        return response.json(user);
    }
}

export {CourseUnitController};