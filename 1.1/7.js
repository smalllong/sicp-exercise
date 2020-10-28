// 1.6 According to the applicative-order evaluation, all the arguments are evaluated first, which is different from conditional expressions which only evaluate one of the two conditions. This results in infinite loop in which sqrt_iter always calls itself.

// 1.7 For very small numbers like 0.00000001, when the square(guess) is between 0 and 0.001 it always passes the test. For example the guess is 0.01 and square(guess) is 0.0001, we can tell it is far from good enough but it passes the test. For very large numbers like 100000000, if the guess is 9999.99999 which is good enough, the test still return false since abs(square(9999.99999) - 100000000) == 0.19999998807907104 > 0.001 because the square magnifies the difference.
// better implementation:

function square_root(x) {
	return sqrt_iter(1, x, 0);
}

function sqrt_iter(guess, x, lastGuess) {
	return diff_ratio(guess, lastGuess) < 0.001 ? guess : sqrt_iter(improve(guess, x), x, guess);
}

function diff_ratio(target, standard) {
	return abs(target / standard - 1);
}

function improve(guess, x) {
	return averate(guess, x / guess);
}

function average(x, y) {
	return (x + y) / 2;
}

// 1.8
function cube_root(x) {
	return cube_iter(1, x, 0);
}

function cube_iter(guess, x, lastGuess) {
	return diff_ratio(guess, lastGuess) < 0.001 ? guess : cube_iter(cube_improve(guess, x), x, guess);
}

function cube_improve(guess, x) {
	return (x / square(guess) + 2 * guess) / 3;
}