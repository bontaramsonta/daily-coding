import { assertEquals } from 'jsr:@std/assert';

function solve(input: any): any {
}

const testCases = [
    { i: [], e: 0 },
    { i: [], e: 0 },
    { i: [], e: 0 },
];

testCases.forEach((t) =>
    Deno.test(`on ${t.i}`, () => {
        const result = solve(t.i);
        assertEquals(result, t.e);
    })
);
