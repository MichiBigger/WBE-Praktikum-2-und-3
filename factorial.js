function factorial(n) {
  if (typeof n === 'bigint') {
    if (n < 0n) throw new RangeError('n must be ≥ 0n');
    let acc = 1n;
    for (let i = 2n; i <= n; i++) acc *= i;
    return acc;
  }
  if (typeof n === 'number') {
    if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be a non-negative integer');
    let acc = 1;
    for (let i = 2; i <= n; i++) acc *= i;
    return acc;
  }
  throw new TypeError('n must be a number or a bigint');
}

module.exports = { factorial };
