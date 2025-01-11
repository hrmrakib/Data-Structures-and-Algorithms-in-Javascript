// Circular queue implement

function CircularQueue(k) {
  this.queue = [];
  this.size = k;
}

CircularQueue.prototype.enqueue = function (value) {
  if (this.queue.length === this.size) return "Circular queue is full!";

  this.queue.push(value);
  return true;
};

CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return "Opps, queue is empty!";

  this.queue.shift();
  return true;
};

CircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

CircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return "Opps, queue is empty!";

  return this.queue[0];
};

CircularQueue.prototype.Rear = function () {
  return this.queue[this.queue.length - 1];
};

CircularQueue.prototype.size = function () {
  return this.queue.length;
};

const chair = new CircularQueue(4);

chair.enqueue(1);

console.log(chair.Front(), chair.Rear());
