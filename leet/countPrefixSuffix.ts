import { assertEquals } from 'jsr:@std/assert';

function countPrefixSuffixPairs(words: string[]): number {
    let count = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
                count += 1;
                console.log(i, words[i], j, words[j], 'match');
            } else {
                console.log(i, words[i], j, words[j], 'miss');
            }
        }
    }
    return count;
}

const testCases = [
    { i: ['a', 'aba', 'ababa', 'aa'], e: 4 },
    { i: ['pa', 'papa', 'ma', 'mama'], e: 2 },
    { i: ['abab', 'ab'], e: 0 },
    { i: ['bc', 'b', 'ab'], e: 0 },
];

testCases.forEach((t) =>
    Deno.test(`on ${t.i}`, () => {
        const result = countPrefixSuffixPairs(t.i);
        assertEquals(result, t.e);
    })
);
