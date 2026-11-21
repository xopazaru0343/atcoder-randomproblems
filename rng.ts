export function generateRandomNumber(min: number, max: number): number {
    const range = max - min;
    const maxGeneratedValue = 0xFFFFFFFF;
    const possibleResultValues = range + 1;
    const possibleGeneratedValues = maxGeneratedValue + 1;
    const remainder = possibleGeneratedValues % possibleResultValues;
    const maxUnbiased = maxGeneratedValue - remainder;

    if (!Number.isInteger(min) || !Number.isInteger(max) ||
      max > Number.MAX_SAFE_INTEGER || min < Number.MIN_SAFE_INTEGER) {
      throw new Error('Arguments must be safe integers.');
    } else if (range > maxGeneratedValue) {
      throw new Error(`Range of ${range} (from ${min} to ${max}) > ${maxGeneratedValue}.`);
    } else if (max < min) {
      throw new Error(`max (${max}) must be >= min (${min}).`);
    } else if (min === max) {
      return min;
    }

    let generated;

    do {
      generated = crypto.getRandomValues(new Uint32Array(1))[0];
    } while (generated > maxUnbiased);

    return min + (generated % possibleResultValues);
    //NOT MY CODE, CREDITS TO @thomaskonrad
}