# 1046. Last Stone Weight

**Difficulty:** Easy  
**Topics:** Heap, Simulation  
**Companies:** [Premium Lock]

## Problem Statement

You are given an array of integers `stones` where `stones[i]` is the weight of the *i-th* stone.

We are playing a game with the stones. On each turn, we choose the two heaviest stones and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:

- If `x == y`, both stones are destroyed.
- If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.

At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return `0`.

---

## Examples

### Example 1

**Input:**  
`stones = [2,7,4,1,8,1]`  
**Output:**  
`1`  

**Explanation:**  
- Combine 7 and 8 → new stone = 1 → `[2,4,1,1,1]`  
- Combine 2 and 4 → new stone = 2 → `[2,1,1,1]`  
- Combine 2 and 1 → new stone = 1 → `[1,1,1]`  
- Combine 1 and 1 → both destroyed → `[1]`  
- Final stone weight is `1`.

### Example 2

**Input:**  
`stones = [1]`  
**Output:**  
`1`

---

## Constraints

- `1 <= stones.length <= 30`
- `1 <= stones[i] <= 1000`
