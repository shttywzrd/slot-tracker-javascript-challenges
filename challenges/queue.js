/**
 * Implement the Queue class with the following methods:
 *     size()     - returns the size of the queue (number of items in it)
 *     add(item)  - adds an item to the queue
 *     get()      - returns the oldest item from the queue and removes it, returns null if there are no items
 *
 *
 * Usage example:
 * ```
 * const queue = new Queue();
 *
 * queue.add('item1');
 * queue.add('item2');
 *
 * console.log(queue.size()); // 2
 *
 * console.log(queue.get()); // item1
 * console.log(queue.get()); // item2
 *
 * console.log(queue.size()); // 0
 * ```
 */

class Queue {
  #q = new Array();
  #size = 0;

  size() {
    return this.#size;
  }

  add(item) {
    this.#q.push(item);
    this.#size++;
    // could use 'this.#size = this.#q.push(item);' because Array.push() method returns new size(length) of that array
    // but i think the former way is more readable
  }

  get() {
    if (!this.#size) return null;
    this.#size--;
    return this.#q.shift();
  }
}

module.exports = Queue;
