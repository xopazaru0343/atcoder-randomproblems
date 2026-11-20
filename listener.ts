import { getProblem } from "./problemSorter.js";
export async function main(): Promise<number>{
try{
    const form = document.getElementById("myForm");
    if(form != null){
    const elo: number = parseInt((document.getElementById("elo") as HTMLInputElement).value);
    alert("ask and ye shall receive");
    getProblem(elo);
    return elo; 
} else{
    return NaN;
};
} catch(err: unknown){
    return NaN;
    }
}
