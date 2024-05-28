
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int findPermutationDifference(String source, String permutation) {
        int[] frequency = new int[ALPHABET_SIZE];
        int sumAbsoluteIndexDifferences = 0;

        for (int i = 0; i < source.length(); ++i) {
            frequency[source.charAt(i) - 'a'] = i;
        }
        for (int i = 0; i < permutation.length(); ++i) {
            sumAbsoluteIndexDifferences += Math.abs(frequency[permutation.charAt(i) - 'a'] - i);
        }

        return sumAbsoluteIndexDifferences;
    }
}
