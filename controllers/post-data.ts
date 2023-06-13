import { Query } from "express-serve-static-core";
// export interface TypedRequestQuery<T extends Query> extends Express.Request {
//   query: T;
// }
import express, { Request, Response } from "express";
exports.getPost =async (req: Request, res: Response) => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts')

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

exports.getPostDetail =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${req.params.id}`)

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

exports.createPost =async (req: Request, res: Response) => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            id: req.body.id,
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body,
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

exports.updatePost =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${req.params.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: req.body.id,
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body,
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


exports.deletePost =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${req.params.id}`, {
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


exports.gettingPostDetail =async (req: Request, res: Response) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)

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