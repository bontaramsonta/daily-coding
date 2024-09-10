import MinHeap from "./minheap.ts";
import { assertEquals, assert } from "jsr:@std/assert";

Deno.test("construct min heap by inserting one by one", () => {
  const heap = new MinHeap();
  const arr = [29, 5, 10, 15, 12, 21];
  console.log("[insert] arr of elements to insert", arr);
  for (const e of arr) {
    heap.insert(e);
  }
  console.log("[insert] heap after inserts", heap);
  assertEquals(6, heap.getSize(), "heap size not matching");
  assert(
    heap.checkMinHeapProperty(),
    `min heap property violated \n${heap.print()}`
  );
});

Deno.test("construct min heap from arr directly", async (t) => {
  const arr = [29, 5, 10, 15, 12, 21];
  console.log("[from] arr to create heap from", arr);

  await t.step("using new", () => {
    const heap = new MinHeap(arr);
    console.log("[from] heap created directly from arr", heap);
    assertEquals(6, heap.getSize(), "heap size not matching");
    assert(
      heap.checkMinHeapProperty(),
      `min heap property violated \n${heap.print()}`
    );
  });

  await t.step("using from", () => {
    const heap = MinHeap.from(arr);
    console.log("[from] heap created directly from arr", heap);
    assertEquals(6, heap.getSize(), "heap size not matching");
    assert(
      heap.checkMinHeapProperty(),
      `min heap property violated \n${heap.print()}`
    );
  });
});

Deno.test("extract min", () => {
  const arr = [29, 5, 10, 15, 12, 21];
  const heap = MinHeap.from(arr);
  assertEquals(heap.getSize(), 6);
  const min = heap.extractMin();
  assertEquals(min, 5, "extracted min value is not correct");
  assertEquals(heap.getSize(), 5);
  assert(heap.checkMinHeapProperty(), heap.print());
});

Deno.test("decrement key", () => {
  const heap = MinHeap.from([29, 5, 10, 15, 12, 21]);
  heap.decrease(2, 3);
  assert(heap.checkMinHeapProperty());
  assertEquals(heap.extractMin(), 3);
});

Deno.test("delete key", () => {
  const heap = MinHeap.from([29, 5, 10, 15, 12, 21]);
  heap.delete(2);
  assert(heap.checkMinHeapProperty());
  assertEquals(heap.getSize(), 5);
});
