// first i did parse in but error because of overglow
// function addBinary(a: string, b: string): string {
//     let num1 = parseInt(a, 2);
//     let num2 = parseInt(b, 2);

//     while (num2 !== 0) {
//         let carry = num1 & num2;
//         num1 = num1 ^ num2;
//         num2 = carry << 1;
//     }

//     return num1.toString(2);
// }



function addBinary(a: string, b: string): string {

    let num1:bigint = BigInt("0b" + a)
    let num2:bigint = BigInt("0b" + b)
    while(num2 !==0n){
        let carry = num1 & num2
        num1  = num1 ^ num2
        num2 = carry << 1n
    }
    return num1.toString(2)
};

// Converting them to BigInt using "0b" prefix.

// Using bitwise XOR (^) to add without carry.

// Using bitwise AND (&) and left shift (<<) to compute and apply the carry.

// Repeating until no carry remains.

// Converting the result back to a binary string with .toString(2).


// 1. Convert Binary Strings to BigInt
// 
// let num1 = BigInt("0b" + a);
// let num2 = BigInt("0b" + b);
// "0b" tells JavaScript to treat the string as binary.

// BigInt allows you to work with numbers of any size, beyond the 53-bit limit of regular number types.

// 2. Bitwise Addition Loop
// 
// while (num2 !== 0n) {
// This loop continues until there's no carry left (num2 becomes 0n).

// 3. Calculate Carry
// 
// let carry = num1 & num2;
// & finds where both bits are 1 — that’s where a carry will happen.

// 4. Add Without Carry
// 
// num1 = num1 ^ num2;
// ^ (XOR) adds bits without carry:

// 1 ^ 1 = 0

// 1 ^ 0 = 1

// 0 ^ 0 = 0

// 5. Shift Carry Left
// 
// num2 = carry << 1n;
// Carry affects the next higher bit, so we shift it left by one.

// 6. Repeat Until Carry is Gone
// The loop continues, updating num1 and num2 until num2 is 0n.

// 7. Convert Result Back to Binary String
// 
// return num1.toString(2);
// Converts the final result from BigInt back to a binary string.