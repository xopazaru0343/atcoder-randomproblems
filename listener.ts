import { getProblem } from "./problemSorter.js";
async function urlHandler(url: URL){
try{
    const answer = await fetch(url);
    if (!answer.ok){
        throw new Error('${answer.status}');
    }    
    const pResult = await answer.json();
    const elo: number = parseInt((document.getElementById("elo") as HTMLInputElement).value);
    alert("ask and ye shall receive");
    getProblem(elo, pResult);
} 
catch(err: unknown){
    throw Error;
    }
}
const form = document.getElementById("myForm");
if(form != null){
    form.addEventListener('submit', (SubmitEvent) => {
    SubmitEvent.preventDefault();
    const url: URL = new URL("https://kenkoooo.com/atcoder/resources/problem-models.json");
    urlHandler(url);
})}


