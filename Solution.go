
package main

import (
	"fmt"
	"math"
)

func findPermutationDifference(source string, permutation string) int {
	const ALPHABET_SIZE = 26
	frequency := make([]int, ALPHABET_SIZE)
	var sumAbsoluteIndexDifferences = 0

	for i := range source {
		frequency[source[i]-'a'] = i
	}
	for i := range permutation {
		sumAbsoluteIndexDifferences += int(math.Abs(float64(frequency[permutation[i]-'a']) - float64(i)))
	}

	return sumAbsoluteIndexDifferences
}
