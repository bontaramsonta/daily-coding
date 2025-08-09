import { assertEquals } from 'jsr:@std/assert';

function naivePatternMatching(s: string, pattern: string) {
    const n = s.length;
    const m = pattern.length;
    // edge case
    if (n == 0) {
        return m == 0;
    }
    for (let i = 0; i < n; i++) {
        let j;
        inner: for (j = 0; j < m; j++) {
            if (s[i + j] !== pattern[j]) {
                break inner;
            }
        }
        if (j == m) {
            return true;
        }
    }
    return false;
}

type Cases = {
    i: [string, string];
    e: boolean;
}[];

const testCases: Cases = [
    // Pattern at different positions
    { i: ['hello', 'he'], e: true }, // beginning
    { i: ['hello', 'll'], e: true }, // middle
    { i: ['hello', 'lo'], e: true }, // end

    // Pattern not found
    { i: ['hello', 'world'], e: false },
    { i: ['abc', 'xyz'], e: false },
    { i: ['test', 'ing'], e: false },

    // Edge cases
    { i: ['', ''], e: true }, // both empty
    { i: ['hello', ''], e: true }, // empty pattern
    { i: ['', 'a'], e: false }, // empty string, non-empty pattern
    { i: ['a', 'a'], e: true }, // exact match single char
    { i: ['hello', 'hello'], e: true }, // exact match
    { i: ['abc', 'abcd'], e: false }, // pattern longer than string

    // Single character patterns
    { i: ['hello', 'h'], e: true },
    { i: ['hello', 'e'], e: true },
    { i: ['hello', 'o'], e: true },
    { i: ['hello', 'x'], e: false },

    // Repeated characters
    { i: ['aaaa', 'aa'], e: true },
    { i: ['abcabc', 'abc'], e: true },
    { i: ['ababab', 'bab'], e: true },

    // Case sensitivity
    { i: ['Hello', 'hello'], e: false },
    { i: ['HELLO', 'hello'], e: false },

    // Special characters
    { i: ['hello@world.com', '@'], e: true },
    { i: ['test-case', '-'], e: true },
    { i: ['file.txt', '.txt'], e: true },

    // Multiple occurrences
    { i: ['banana', 'an'], e: true },
    { i: ['banana', 'na'], e: true },
    { i: ['abcabcabc', 'cab'], e: true },
];

testCases.forEach((t) =>
    Deno.test(`on ${t.i}`, () => {
        const result = naivePatternMatching(...t.i);
        assertEquals(result, t.e);
    })
);
