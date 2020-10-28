// 1.1
10; //10

5 + 3 + 4; //12

9 - 1; //8

6 / 2; //3

2 * 4 + (4 - 6); //6

const a = 3;

const b = a + 1;

a + b + a * b; //19

a === b; //false

b > a && b < a * b
    ? b : a; //4

a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25; //16

// 1.2
(5 + 4 + (2 - (3 - (6 + 4 / 5)))) / (3 * (6 - 2) * (2 - 7))

// 1.3
function sumOfLargerSquares(a, b, c) {
    return a < b && a < c
    ? b * b + c * c
    : b < c
        ? a * a + c * c
        : a * a + b * b;
}

// 1.4
// a_plus_abs_b(5, -4) => (-4 >= 0 ? plus : minus)(5, -4) => minus(5, -4) => 5 - -4 => 9

// 1.5
// applicative-order evaluation: infinite loop
// normal-order evaluation: 0