import { RowDataPacket } from "mysql2";


export interface Owner extends RowDataPacket{
    id?:number;
    name:string;
    surname:string;
    phone:string;
    email:string;
    address:string;
  
    }

    
