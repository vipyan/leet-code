function singleNumber(nums: number[]): number {
    return nums.reduce((acc,cur)=>acc ^ cur,0)
};


// I used the bitwise XOR (^) operator to solve this 
// problem because of its unique properties:

// a ^ a = 0 → duplicates cancel each other out

// a ^ 0 = a → XORing with zero returns the original number

// XOR is commutative and associative, so the order of operations doesn’t matter

// By reducing the array with XOR, all duplicate elements 
// cancel out, leaving only the single unique number.