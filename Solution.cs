
using System;

public class Solution
{
    static readonly int ALPHABET_SIZE = 26;

    public int FindPermutationDifference(string source, string permutation)
    {
        int[] frequency = new int[ALPHABET_SIZE];
        int sumAbsoluteIndexDifferences = 0;

        for (int i = 0; i < source.Length; ++i)
        {
            frequency[source[i] - 'a'] = i;
        }
        for (int i = 0; i < permutation.Length; ++i)
        {
            sumAbsoluteIndexDifferences += Math.Abs(frequency[permutation[i] - 'a'] - i);
        }

        return sumAbsoluteIndexDifferences;
    }
}
