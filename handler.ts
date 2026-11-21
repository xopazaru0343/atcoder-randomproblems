import { getProblem } from "./problemSorter.js";
import problemModels from './problem-models.json' with { type: 'json' };

export async function handler(form: HTMLFormElement){

    try{
        //const answer = await fetch(url);
        //if (!answer.ok) throw new Error('${answer.status}');
        const value = await getValue(new FormData(form));
        const elo: number = parseInt(value);
        alert("ask and ye shall receive");
        const problemsData = <JSON> <unknown>problemModels;
        getProblem(elo, problemsData);

    } 

    catch(err: unknown){
        throw Error;
        }
    }

async function getValue(form: FormData): Promise<string>{
    return form.get('elo') as string;
}


