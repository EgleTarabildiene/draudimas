import { RowDataPacket } from "mysql2";

export interface ResultOrdersOwners extends RowDataPacket{
    ownerId:Number, 
    count:Number
}

export interface Order extends RowDataPacket{
    id?:number;
    name:string;
    surname:number;
    order_date:Date;
    
    owners:ResultOrdersOwners[];
}