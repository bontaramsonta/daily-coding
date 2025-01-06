// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description
// couldn't solve this
import { assertEquals } from 'jsr:@std/assert';

function minOperations(boxes: string): number[] {
    const arr = boxes.split('').map((e) => parseInt(e));
    const result = new Array(arr.length).fill(0);
    let current = 0;
    let moves = 0;
    // left prefix
    for (let i = 0; i < arr.length; i++) {
        result[i] += current + moves;
        moves = result[i];
        console.log('left', i, current, moves, result[i]);
        if (arr[i] === 1) {
            current += 1;
        }
    }
    current = 0;
    moves = 0;
    let acc = 0;
    // right prefix
    for (let i = arr.length - 1; i >= 0; i--) {
        acc += current + moves;
        moves = acc;
        result[i] += acc;
        console.log('right', i, current, moves, acc, result[i]);
        if (arr[i] === 1) {
            current += 1;
        }
    }
    return result;
}

const testCases = [
    { boxes: '110', expected: [1, 1, 3] },
    { boxes: '001011', expected: [11, 8, 5, 4, 3, 4] },
];

testCases.map((t) => {
    Deno.test(`on ${t.boxes}`, () => {
        const result = minOperations(t.boxes);
        assertEquals(result, t.expected);
    });
});
