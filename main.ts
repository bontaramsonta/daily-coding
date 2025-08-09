import { assertEquals } from 'jsr:@std/assert';

function solve(...input: any) {
    return 0;
}

type Cases = {
    i: [string, string];
    e: number;
}[];

const testCases: Cases = [
    { i: ['abab', 'ab'], e: 0 },
    { i: ['abab', 'ba'], e: 1 },
];

testCases.forEach((t) =>
    Deno.test(`on ${t.i}`, () => {
        const result = solve(...t.i);
        assertEquals(result, t.e);
    })
);
