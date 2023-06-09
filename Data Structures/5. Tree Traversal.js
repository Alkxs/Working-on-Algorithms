//Definition

Process of visiting each node in a tree data structure oncuechange. different ways:

// Base implementation of binary tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    // following methods go here
}

1. Depth-first search(DFS)

  * Pre-order:
    - Visit the node
    - Traverse the left subtree
    - Traverse the right subtree

    // Implementation
  preOrder() {
        let result = [];
        function traverse(currentNode) {
            if (currentNode) {
                result.push(currentNode.value);
                traverse(currentNode.left);
                traverse(currentNode.right);
            }
        }
        traverse(this.root);
        return result;
}


  * In-order:
    - Traverse the left subtree
    - Visit the node
    - Traverse the right subtree

    // Implementation
   

  * Post-order:
    - Traverse the left subtree
    - Traverse the right subtree
    - Visit the node

    // Implementation

   


2. Breatdh-first search (BFS)

Unlike depth-first search that dives deep into a tree as much as possible, breadth-first search explores all the neighbors(horizontal search) at the present depth before moving on to nodes at the next depth level. BFS is implemented using a queue.

  // Implementation

 breadthFirst() {
        let result = [];
        let queue = [];
        
        if (this.root != null) {
            queue.push(this.root);

            while(queue.length > 0) {
                let node = queue.shift();
                result.push(node.value);
                
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
        }
        return result;
    }


//Big O tree traversal

DFS = O(n)
BFS = O(n)

// Notes

* BFS uses more memory than DFS because it needs to store all nodes in the current level to queue

* BFS could be a good choice if you want to find the shortest path from the root to a target node. But if the tree is very deep and solutions are rare, depth-first search (DFS) might be a better choice.