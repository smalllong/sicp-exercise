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

// plus(4, 5)
// a === 0 ? 5 : plus(dec(4), inc(5))
// plus(dec(4), inc(5))
// plus(3, 6)
// plus(2, 7)
// plus(1, 8)
// plus(0, 9)
// 9