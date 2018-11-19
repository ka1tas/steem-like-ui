import { Address } from "./address";
import { Skill } from "./skill";
import { Department } from "./department";

export class Employee {

    id:number;
    name:string;
    salary:number;
    email:string;
    address:Address;
    skill:Skill;
    department:Department;
}
