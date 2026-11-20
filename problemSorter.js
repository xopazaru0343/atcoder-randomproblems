import { tableFromJSON } from 'apache-arrow';
function generateRandomNumber(min, max) {
    const range = max - min;
    const maxGeneratedValue = 0xFFFFFFFF;
    const possibleResultValues = range + 1;
    const possibleGeneratedValues = maxGeneratedValue + 1;
    const remainder = possibleGeneratedValues % possibleResultValues;
    const maxUnbiased = maxGeneratedValue - remainder;
    if (!Number.isInteger(min) || !Number.isInteger(max) ||
        max > Number.MAX_SAFE_INTEGER || min < Number.MIN_SAFE_INTEGER) {
        throw new Error('Arguments must be safe integers.');
    }
    else if (range > maxGeneratedValue) {
        throw new Error(`Range of ${range} (from ${min} to ${max}) > ${maxGeneratedValue}.`);
    }
    else if (max < min) {
        throw new Error(`max (${max}) must be >= min (${min}).`);
    }
    else if (min === max) {
        return min;
    }
    let generated;
    do {
        generated = crypto.getRandomValues(new Uint32Array(1))[0];
    } while (generated > maxUnbiased);
    return min + (generated % possibleResultValues);
    //NOT MY CODE, CREDITS TO @thomaskonrad
}
export async function getProblem(elo) {
    const url = "https://kenkoooo.com/atcoder/resources/problem-models.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('${response.status}');
        }
        const pResult = await response.json();
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
        alert(`${result.at(problem1)}, ${result.at(problem2)}, ${result.at(problem3)}, ${result.at(problem4)}`);
        return [result.at(problem1), result.at(problem2), result.at(problem3), result.at(problem4)];
    }
    catch (error) {
        console.error(error.message);
    }
}
