export class Stack<T> {
    private _arr: T[] = [];
    constructor(array?: T[]) {
        this._arr = array || [];
    }

    public size() {
        return this._arr.length;
    }

    public isEmpty() {
        return this.size() === 0;
    }

    public push(item: T) {
        this._arr.push(item);
    }

    public pop() {
        return this._arr.pop();
    }

    public peek() {
        return this._arr.at(-1);
    }
}

if (import.meta.main) {
    const stk = new Stack<number>();
    stk.push(5);
    console.log(stk.pop());
    console.log(stk.peek());
    console.log(stk.peek());
}
