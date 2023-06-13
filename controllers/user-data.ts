import { Query } from "express-serve-static-core";
// export interface TypedRequestQuery<T extends Query> extends Express.Request {
//   query: T;
// }
import express, { Request, Response } from "express";
exports.getUser =async (req: Request, res: Response) => {
    const api = await fetch('https://jsonplaceholder.typicode.com/users')

    if(api.ok){
        let data = await api.json();
        console.log(data);
        try{
            res.json({ data: data });
            
        }catch{
            console.log(data);
        }
    }
    
}

exports.getUserDetail =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users?id=${req.params.id}`)

    if(api.ok){
        let data = await api.json();
        console.log(data);
        try{
            res.json({ data: data });
            
        }catch{
            console.log(data);
        }
    }
    
}

exports.createUser =async (req: Request, res: Response) => {
    const api = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            id: req.body.id,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
            "Content-Type": "application/json"
        },
      })

      // insert to DB
    if(api.ok){
        let data = await api.json();
        console.log(data);
        try{
            res.json({ data: data });
            
        }catch{
            console.log(data);
        }
    }
    
}

exports.updateUser =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users?id=${req.params.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: req.body.id,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
            "Content-Type": "application/json"
        },
      })

      // code update data to DB
    if(api.ok){
        let data = await api.json();
        console.log(data);
        try{
            res.json({ data: data });
            
        }catch{
            console.log(data);
        }
    }
    
}


exports.deleteUser =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users?id=${req.params.id}`, {
        method: 'DELETE',
      })

       // delete data to DB

    if(api.ok){
        let data = await api.json();
        console.log(data);
        try{
            res.json({ data: data });
            
        }catch{
            console.log(data);
        }
    }
    
}


exports.gettingUserDetail =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users?id=${req.params.id}`)

    if(api.ok){
        let data = await api.json();
        console.log(data);
        try{
            res.json({ data: data });
            
        }catch{
            console.log(data);
        }
    }
    
}