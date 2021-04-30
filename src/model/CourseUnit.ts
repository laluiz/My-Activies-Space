import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid";

import { Activy } from './Activy';


@Entity("courseunit")
class CourseUnit {
    
    constructor(){
       if(!this.id){
         this.id = uuid();
        }
    }


    @PrimaryColumn()
    
    readonly id: string 

    @OneToMany(() => Activy, activy => activy.course_unit)
    activies: Activy[];

    @Column()
    name: string;
    
    @Column()
    description: String;

    @CreateDateColumn()
    created_at: Date;



}

export {CourseUnit};