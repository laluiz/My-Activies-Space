import {getRepository} from 'typeorm';
import { CourseUnit } from '../model/CourseUnit';

interface CourseUnitData {
    name: string;
    description: string
    
}

class CreateCourseUnitService {
    async execute({name,description}:CourseUnitData)
    {
        const courseunitRepository = getRepository(CourseUnit);
        const courseunit = courseunitRepository.create({
            name,
            description,
        });

        await courseunitRepository.save(courseunit);
        return courseunit;
    }
}
export {CreateCourseUnitService};