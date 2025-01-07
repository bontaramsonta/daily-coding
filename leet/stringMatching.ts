// (easy) https://leetcode.com/problems/string-matching-in-an-array
import { assertEquals } from 'jsr:@std/assert';

function stringMatching(words: string[]): string[] {
    const result: Set<string> = new Set();
    console.log(words);
    // go through all combinations
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // find smaller word in larger word
            const smallerword = words[i].length < words[j].length
                ? words[i]
                : words[j];
            const largerword = words[i].length >= words[j].length
                ? words[i]
                : words[j];
            // early continue
            if (result.has(smallerword)) {
                continue;
            }
            if (largerword.includes(smallerword)) {
                result.add(smallerword);
                console.log('[matched]', i, words[i], j, words[j], result);
            } else {
                console.log('[miss]', i, words[i], j, words[j], result);
            }
        }
    }
    return [...result];
}

const testCases = [
    {
        words: ['mass', 'as', 'hero', 'superhero'],
        expected: ['as', 'hero'],
    },
    {
        words: ['leetcode', 'et', 'code'],
        expected: ['et', 'code'],
    },
    {
        words: ['blue', 'green', 'bu'],
        expected: [],
    },
    {
        words: ['leetcoder', 'leetcode', 'od', 'hamlet', 'am'],
        expected: ['leetcode', 'od', 'am'],
    },
    {
        words: ['one', 'two', 'three', 'four'],
        expected: [],
    },
];

testCases.map((t) =>
    Deno.test(`on ${t.words}`, () => {
        const result = stringMatching(t.words);
        assertEquals(result, t.expected);
    })
);
