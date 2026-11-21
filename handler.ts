import { getProblem } from "./problemSorter.js";

export async function handler(url: URL, form: Element){
    
    try{
        const answer = await fetch(url);
        if (!answer.ok) throw new Error('${answer.status}');

        const pResult = await answer.json();
        const elo: number = parseInt(form.textContent);
        alert("ask and ye shall receive");
        getProblem(elo, pResult);

    } 

    catch(err: unknown){
        throw Error;
        }
    }



