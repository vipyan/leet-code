# 🧮 Add Binary Strings

This project provides a function to add two binary strings and return their sum as a binary string. It handles large inputs efficiently and adheres to TypeScript type safety using `BigInt`.

---

## 📘 Problem Statement

Given two binary strings `a` and `b`, return their sum as a binary string.

---

## ✅ Examples

### Example 1
- **Input:** `a = "11"`, `b = "1"`
- **Output:** `"100"`

### Example 2
- **Input:** `a = "1010"`, `b = "1011"`
- **Output:** `"10101"`

---

## 📌 Constraints

- `1 <= a.length, b.length <= 10⁴`
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

---

## 🧠 Approach

This solution uses bitwise operations with `BigInt` to simulate binary addition:

1. Convert binary strings to `BigInt` using `BigInt("0b" + a)`.
2. Use a loop to add the numbers using XOR and AND for carry.
3. Convert the result back to a binary string using `.toString(2)`.

---


