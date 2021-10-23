# Problem-solving 

## Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e.spaces, punctuation), but do pass them on.

``` javascript
function rot13(str) {
    return str;
}
rot13("PUNEVMNEQ"); //
```

## Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
```js
translatePigLatin("california")➞"aliforniacay"
translatePigLatin("paragraphs")➞"aragraphspay"
translatePigLatin("algorithm")➞"algorithmway"
translatePigLatin("schwartz")➞"artzschway"
```

## Padovan Sequence
In number theory, the Padovan sequence is the sequence of integers P(n) defined by the initial values:
```js
P(0) = P(1) = P(2) = 1
// And the recurrence relation:
P(n) = P(n-2) + P(n-3)
```
As with any sequence defined by a recurrence relation, Padovan numbers P(m) for m<0 can be defined by rewriting the recurrence relation as:
`P(m) = P(m+3) - P(m+1)`   
**Objective**
Create a function that takes two numbers, m and n, being m always negative and n always positive, and returns an array with the Padovan numbers between P(m) and P(n).

```js
padovan(-1, 1) ➞ [0, 1, 1]
padovan(-10, 10) ➞ [2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12]
padovan(-50, 1) ➞ [-524, 245, 71, -279, 316, -208, 37, 108, -171, 145, -63, -26, 82, -89, 56, -7, -33, 49, -40, 16, 9, -24, 25, -15, 1, 10, -14, 11, -4, -3, 7, -7, 4, 0, -3, 4, -3, 1, 1, -2, 2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1]
```

---

# Random color

Tạo một ứng dụng giúp chọn 1 mã màu random để thoả mãn tính tò mò của người dùng

## Requirements
[] Ứng dụng có các ô (box) cho phép người dùng nhấn chuột vào
[] Khi người dùng click vào các màu trong ô sẽ thay đổi ngẫu nhiên

## Kiến thức tham khảo
- [rgb](https://www.w3schools.com/colors/colors_rgb.asp)
- [CSS DOM](https://www.w3schools.com/js/js_htmldom_css.asp)
- [click event](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

## Example:
- https://prank-sonlh.netlify.app/colorful/