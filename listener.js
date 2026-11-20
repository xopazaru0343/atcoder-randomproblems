import { getProblem } from "./problemSorter.js";
export async function main() {
    try {
        const form = document.getElementById("myForm");
        if (form != null) {
            const elo = parseInt(document.getElementById("elo").value);
            alert("ask and ye shall receive");
            getProblem(elo);
            return elo;
        }
        else {
            return NaN;
        }
        ;
    }
    catch (err) {
        return NaN;
    }
}
