

class Node {
    constructor (value) {
        this.value = value;
        this.next = undefined
    }
}

class NodeList {
    constructor (arr) {
        let head = new Node(arr.shift());
        let next = head;

        arr.forEach(item => {
            next.next = new Node(item);
            next = next.next;
        });
    }
}