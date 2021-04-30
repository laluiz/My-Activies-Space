import {Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';

import { CourseUnit } from './CourseUnit';

@Entity("activy")
class Activy {
    
    constructor(){
       if(!this.id){
         this.id = uuid();
        }
    }


    @PrimaryColumn()
    
    readonly id: string

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit
    
    @Column()
    name: string;

    @Column()
    course_unit_id: string;
         
    @Column()
    activy_date: string;

    @CreateDateColumn()
    created_at: Date;

}

export {Activy}