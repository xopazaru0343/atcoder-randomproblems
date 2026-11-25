import express, {type Request, type Response } from 'express';
import axios from 'axios';

export function startServer(){

    const app = express();
    
    app.get('/', (req: Request, res: Response) => {
        axios.get("https://kenkoooo.com/atcoder/resources/problem-models.json")
        .then((response: { data: any; }) => {
            res.header("Access-Control-Allow-Origin", "https://xopa0343.nekoweb.org/");
            res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
            res.send(response.data);
        })
        .catch((error: any) => {
            console.log(error)
        })
    });

    app.listen(2222);
}
startServer();