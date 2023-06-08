class LinkedList{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }

    add(value){
        const newNode = new LinkedList(value, null);
        let currentNode = this;

        while (currentNode.next) {
        currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    remove(value) {
        if (this.data === value) {
            // The first node matches the value
            this.data = this.next ? this.next.data : null;
            this.next = this.next ? this.next.next : null;
            return true;
          }
      
          let current = this;
          while (current.next) {
            if (current.next.data === value) {
              current.next = current.next.next;
              return true;
            }
            current = current.next;
          }
      
          return false;
    }

    contains(value){
        let current = this;
        while (current) {
        if (current.data === value) {
            return true;
        }
        current = current.next;
        }
        return false;    
    }

    *[Symbol.iterator]() {
        let currentNode = this;
        while (currentNode) {
          yield currentNode.data;
          currentNode = currentNode.next;
        }
    }

    count(){
        let c = 0;
        for (let temp = this; temp; temp = temp.next){
            c++;
        }
        return c;
    }

    clear(){
        this.data = "";
        this.next = null;
    }

    log(){
        let str = "";
        for (let temp = this; temp; temp = temp.next){
            str += temp.data;
            if (temp.next) str += ",";
        }
        console.log(str);
    }
}

function createLinkedList(arr){
    let list = new LinkedList(arr[0]);
    let currentNode = list;

    for (let i = 1; i < arr.length; i++) {
        const newNode = new LinkedList(arr[i], null);
        currentNode.next = newNode;
        currentNode = newNode;
    }

    return list;
}


// const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
// ll.log(); // "100, 1, 2, 3, 100, 4, 5, 100"

// while(ll.remove(100));
// ll.log(); // "1, 2, 3, 4, 5"

// ll.add(10);
// ll.log(); // "1, 2, 3, 4, 5, 10"

// console.log(ll.contains(10)); // "true"
// let sum = 0;
// for(const n of ll) {sum += n;}
// console.log(sum);// "25"

// ll.clear();
// ll.log();