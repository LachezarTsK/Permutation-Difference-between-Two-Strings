
import kotlin.math.abs

class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun findPermutationDifference(source: String, permutation: String): Int {
        val frequency = IntArray(ALPHABET_SIZE)
        var sumAbsoluteIndexDifferences = 0

        for (i in source.indices) {
            frequency[source[i] - 'a'] = i
        }
        for (i in permutation.indices) {
            sumAbsoluteIndexDifferences += abs(frequency[permutation[i] - 'a'] - i)
        }

        return sumAbsoluteIndexDifferences
    }
}
