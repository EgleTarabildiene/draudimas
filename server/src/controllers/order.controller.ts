import { RowDataPacket } from "mysql2";
import { pool } from "../db/connect";
import { Order, ResultOrdersOwners } from "../models/order";


export class OrderController{
    static async getAll( req:any, res:any){
       
        const sql="SELECT * FROM orders";
        const [result]=await pool.query<Order[]>(sql);

       // await result.forEach(async (order,index)=>{
       for (let i=0; i<result.length; i++){
            const sql2="SELECT owner_id as ownerId, count FROM orders_owners WHERE order_id=?";
                
            const [owners]=await pool.query<ResultOrdersOwners[]>(sql2, [result[i].id]);
            result[i].owners=owners;
            console.log(owners);
       }
           

       // });

        console.log(result);
        res.json(result);
    }

    static async getOrder( req:any, res:any){
    
        const sql="SELECT * FROM orders WHERE id=? ";
        const [result]=await pool.query<Order[]>(sql,[req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text':'Pateiktas įrašas nerastas'
            });
        }else{
            res.json(result[0]);
        }
       
    }

    

    static async insert(req:any, res:any){
        const order:Order=req.body;

        const sql="INSERT INTO orders (name, surname) VALUES ( ?, ? )";
        const [result, fields]=await pool.query(sql, [order.name, order.surname]);
        const insertId=(result as any).insertId;

        order.owners.forEach(async (owner)=>{
            const sql2="INSERT INTO orders_owners (order_id, owner_id, count) VALUES (?, ?, ?)";
            await pool.query(sql2, [insertId, owner.ownerId, owner.count] );
        });
        
        res.status(201).json({
            "success":true
        })
    }

}