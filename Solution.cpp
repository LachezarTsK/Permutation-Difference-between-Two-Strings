
#include <array>
#include <cmath>
#include <string>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    int findPermutationDifference(const string& source, const string& permutation) const {
        array<int, ALPHABET_SIZE> frequency{};
        int sumAbsoluteIndexDifferences = 0;

        for (int i = 0; i < source.length(); ++i) {
            frequency[source[i] - 'a'] = i;
        }
        for (int i = 0; i < permutation.length(); ++i) {
            sumAbsoluteIndexDifferences += abs(frequency[permutation[i] - 'a'] - i);
        }

        return sumAbsoluteIndexDifferences;
    }
};
