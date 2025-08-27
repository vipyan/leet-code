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