
/**
 * @param {string} source
 * @param {string} permutation
 * @return {number}
 */
var findPermutationDifference = function (source, permutation) {
    const ALPHABET_SIZE = 26;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    let sumAbsoluteIndexDifferences = 0;

    for (let i = 0; i < source.length; ++i) {
        frequency[source.codePointAt(i) - 'a'.codePointAt(0)] = i;
    }
    for (let i = 0; i < permutation.length; ++i) {
        sumAbsoluteIndexDifferences += Math.abs(frequency[permutation.codePointAt(i) - 'a'.codePointAt(0)] - i);
    }

    return sumAbsoluteIndexDifferences;
};
