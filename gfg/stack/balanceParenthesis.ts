import { assertEquals } from 'jsr:@std/assert';
import { Stack } from './stack.ts';

const OPEN_BRACKET = ['(', '{', '['];
const CLOSING_BRACKET = [')', '}', ']'];
const BRACKET_PAIR: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
};

function balanceParenthesis(input: string): boolean {
    const stack = new Stack<string>();
    for (const element of input) {
        if (CLOSING_BRACKET.includes(element)) {
            const top = stack.pop();
            if (top !== BRACKET_PAIR[element]) {
                console.log('break', top, 'for', element);
                return false;
            }
        } else if (OPEN_BRACKET.includes(element)) {
            stack.push(element);
        }
    }
    return true;
}

const testCases = [
    { i: '([])', e: true },
    { i: '{(a+b)[{x*y}]}', e: true },
    { i: '(!() || (( a^b && red == true)))', e: true },
    { i: '())(', e: false },
    { i: '([)]', e: false },
];

testCases.forEach((t) =>
    Deno.test(`on ${t.i}`, () => {
        const result = balanceParenthesis(t.i);
        assertEquals(result, t.e);
    })
);
