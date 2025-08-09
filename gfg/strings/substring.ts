import { assertEquals } from 'jsr:@std/assert';

function isSubSequence(s: string, substring: string) {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == substring[j]) {
            j++;
        }
    }
    return j == substring.length;
}

type Cases = {
    i: [string, string];
    e: boolean;
}[];

const testCases: Cases = [
    { i: ['abcd', 'ad'], e: true },
    { i: ['abcde', 'aed'], e: false },
];

testCases.forEach((t) =>
    Deno.test(`on ${t.i}`, () => {
        const result = isSubSequence(...t.i);
        assertEquals(result, t.e);
    })
);
