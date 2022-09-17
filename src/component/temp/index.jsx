
export default class MyCircularQueue {
    constructor (list) {
        // 用来保存数据结构为K 的数据结构
        this.list = Array(list);
        // 队首的指针
        this.front = 0;
        // 队尾的指针
        this.rear = 0;
        // 用来保存长度的
        this.max = list;

    }
    // 向队列添加
    enQueue (num) {
        if (this.isFull()) {
            return false;
        } else {
            this.list[this.rear] = num;
            this.rear = (this.rear + 1) % this.max;
            return true;
        }
    }
    // 队列里移除一个元素
    deQueue () {
        this.list[this.front]= "";
        this.front = (this.front + 1) % this.front;
    }

    // 判断队列是否为空
    isEmpty () {
        return this.rear === this.front && !this.list[this.rear]
    }

    // 判断队列是否是满的
    isFull () {
        return this.rear === this.front && !!this.list[this.rear]
    }

    // 返回队首元素
    front () {
        return this.list[this.front]
    }

    // 返回队尾指针
    rear () {
        var g = this.rear - 1
        return this.list[g < 0 ? this.max - 1: g]
    }
}