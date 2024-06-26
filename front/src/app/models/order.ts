export class Order{
    constructor (
        public name:string,
        public surname:string, 
        public id?:number,
        public order_date?:Date,
        public owners?:{
            ownerId:number,
            count:number
        }[]
    ){}
}