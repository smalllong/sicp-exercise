// 1.11
function fRecur(n) {
  return n < 3
  ? n
  : fRecur(n-1) + 2 * fRecur(n-2) + 3 * fRecur(n-3);
}

function fIter(n) {
  return n < 3
  ? n
  : iter(2, 1, 0, n - 2);
}
function iter(a, b, c, count) {
  return count === 0
  ? a
  : iter(a + 2*b + 3*c, a, b, count - 1)
}

// 1.12
function pascal(row, col) {
  return col === 1 || col === row
  ? 1
  : pascal(row - 1, col - 1) + pascal(row - 1, col);
}
// fix: col > row return false

// 1.13
// Fib(0) = 0 = (ϕ^0−ψ^0)/sqrt(5)
// Fib(1) = 1 = (ϕ^1−ψ^1)/sqrt(5)
// (ϕ^(n-2)−ψ^(n-2) + ϕ^(n-1)−ψ^(n-1))/sqrt(5) = ((ϕ+1)/ϕ^2 * ϕ^n - (ψ+1)/ψ^2 * ψ^n)/sqrt(5) = (ϕ^n - ψ^n)/sqrt(5)