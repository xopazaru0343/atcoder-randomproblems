import { getProblem } from "./problemSorter.js";

export async function handler(form: HTMLFormElement, url: URL){

    try{
        const answer = await fetch(url);
        if (!answer.ok) throw new Error('${answer.status}');
        const problemsData = await answer.json();
        const value = await getValue(new FormData(form));
        const elo: number = parseInt(value);
        alert("ask and ye shall receive");
        getProblem(elo, problemsData);

    } 

    catch(err: unknown){
        throw Error;
        }
    }

async function getValue(form: FormData): Promise<string>{
    return form.get('elo') as string;
}


