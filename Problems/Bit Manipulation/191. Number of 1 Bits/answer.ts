// function hammingWeight(n: number): number {
//     let count:number = 0
//     while(n > 0){
//         if(n%2){
//             count ++

//         }
//         n = Math.floor(n / 2)
//     }
//     return count
// };

// Above is the simplest answer i got on first iteration
//but its not the right way


//Brian Kernighan’s Algorithm
//Efficiently removes the lowest set bit in each iteration.

function hammingWeight(n: number): number {
    let count:number = 0
    while(n !== 0){
        count++
        n = n & (n-1) // Drop the lowest set bit
    }
    return count
};

// explanation
// n = 11  (1011 in binary)
// n-1 = 10 (1010 in binary)
// n & (n-1) = 1010 (binary) = 10

// n &= (n - 1);

// This is the Brian Kernighan trick:

// n - 1 flips all the bits after the rightmost 1, and clears that 1.

// n & (n - 1) removes the rightmost 1 from n.

// After this operation, n has one fewer set bit.