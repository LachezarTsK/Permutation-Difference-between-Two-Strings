
function findPermutationDifference(source: string, permutation: string): number {
    const ALPHABET_SIZE = 26;
    const frequency: number[] = new Array(ALPHABET_SIZE).fill(0);
    let sumAbsoluteIndexDifferences = 0;

    for (let i = 0; i < source.length; ++i) {
        frequency[source.codePointAt(i) - 'a'.codePointAt(0)] = i;
    }
    for (let i = 0; i < permutation.length; ++i) {
        sumAbsoluteIndexDifferences += Math.abs(frequency[permutation.codePointAt(i) - 'a'.codePointAt(0)] - i);
    }

    return sumAbsoluteIndexDifferences;
};
