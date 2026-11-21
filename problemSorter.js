import { tableFromJSON } from 'apache-arrow';
import { generateRandomNumber } from './rng.js';
export async function getProblem(elo, pResult) {
    const rows = Object.entries(pResult).map(([id, item]) => ({
        id,
        ...item,
    }));
    const table = tableFromJSON(rows);
    const x = elo - 200;
    const y = elo + 400;
    const result = [...table].filter((row) => row.difficulty >= x && row.difficulty <= y);
    result.map(item => item.id);
    const size = result.length;
    const problem1 = generateRandomNumber(0, size - 1);
    const problem2 = generateRandomNumber(0, size - 1);
    const problem3 = generateRandomNumber(0, size - 1);
    const problem4 = generateRandomNumber(0, size - 1);
    alert(`${result.at(problem1).id}, ${result.at(problem2).id}, ${result.at(problem3).id}, ${result.at(problem4).id}`);
}
