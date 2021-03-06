// 1.9

// plus(4, 5)
// a === 0 ? 5 : inc(plus(dec(4), 5))
// inc(plus(dec(4), 5))
// inc(plus(3, 5))
// inc(inc(plus(2, 5)))
// inc(inc(inc(plus(1, 5))))
// inc(inc(inc(inc(plus(0, 5)))))
// inc(inc(inc(inc(5))))
// inc(inc(inc(6)))
// inc(inc(7))
// inc(8)
// 9
// recursive

// plus(4, 5)
// a === 0 ? 5 : plus(dec(4), inc(5))
// plus(dec(4), inc(5))
// plus(3, 6)
// plus(2, 7)
// plus(1, 8)
// plus(0, 9)
// 9
// iterative

// 1.10

// f(n) => A(0, n) => 2 * n

// A(1, 10)
// A(0, A(1, 9))
// A(0, A(0, A(1, 8)))
// A(0, A(0, A(0, A(1, 7))))
// ...
// A(0, ...A(1, 1)...)
// A(0, ...A(0, 2)...)
// A(0, ...A(0, 4)...)
// A(0, ...A(0, 8)...)
// A(0, 512)
// 1024
// g(n) => A(1, n) => n === 0 ? 0 : 2^n

// A(2, 4)
// A(1, A(2, 3))
// A(1, A(1, A(2, 2)))
// A(1, A(1, A(1, A(2, 1))))
// A(1, A(1, A(1, 2)))
// A(1, A(1, 4))
// A(1, 16)
// 65536
// h(n) => A(2, n) => A(1, A(2, n - 1)) => n === 0 ? 0 : 2^(2^(2^...))

// A(3, 3)
// A(2, A(3, 2))
// A(2, A(2, A(3, 1)))
// A(2, A(2, 2))
// A(2, 4)
// 65536