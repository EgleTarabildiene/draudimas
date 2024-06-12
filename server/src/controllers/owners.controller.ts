import { pool } from "../db/connect";
import { Owner } from "../models/owner";


export class OwnersController{
    static async getAll( req:any, res:any){
        const sql="SELECT * FROM owners";
        const [result]=await pool.query<Owner[]>(sql);
        res.json(result);
    }

    static async getOwner( req:any, res:any){
          console.log(req.params.id);
        const sql="SELECT * FROM owners Where id=?";
        const [result]=await pool.query<Owner[]>(sql,[req.params.id]);
       if (result.length==0){
            res.status(404).json({
                'text':'Pateiktas įrašas nerastas'
            });
        }else{
            res.json(result[0]);
        }
       
    }

    static async insert(req:any, res:any){
        const sql="INSERT INTO owners (name, surname, phone, email, address) VALUES ( ?, ?, ?, ?, ? )";
        await pool.query(sql, [req.body.name, req.body.surname, req.body.phone, req.body.email, req.body.address]);
        res.status(201).json({
            "success":true
        })
    }

    static async update(req:any, res:any){
        const sql="UPDATE owners SET name=?, surname=?, phone=?, email=?, address=?  WHERE id=?";
        try{
       await pool.query(sql, [req.body.name, req.body.surname, req.body.phone, req.body.email, req.body.address, req.body.id]);
        res.json({
            "success":true
        });
    }catch(error){
         res.status(500).json({
                'text':'Įvyko atnaujinimo klaida'
            });
    }

        
    }

    static async delete(req:any, res:any){
        const sql="DELETE FROM owners WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}