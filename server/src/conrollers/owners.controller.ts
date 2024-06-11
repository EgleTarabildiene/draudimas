import { pool } from "../db/connect";
import { Owner } from "../models/owner";


export class OwnersController{
    static async getAll( req:any, res:any){
        const sql="SELECT * FROM owners";
        const [result]=await pool.query<Owner[]>(sql);
        res.json(result);
    }

    static async insert(req:any, res:any){
        const sql="INSERT INTO owners (name, surname, phone, email, address) VALUES ( ?, ? )";
        await pool.query(sql, [req.body.name, req.body.surname, req.body.phone, req.body.email, req.body.address,]);
        res.json({
            "success":true
        })
    }

    static async update(req:any, res:any){
        const sql="UPDATE owners SET name=?, surname=? WHERE id=?";
        await pool.query(sql, [req.body.name, req.body.surname, req.body.id]);
        res.json({
            "success":true
        })
    }

    static async delete(req:any, res:any){
        const sql="DELETE FROM owners WHERE id=?";
        await pool.query(sql, [req.body.id]);
        res.json({
            "success":true
        })
    }
}