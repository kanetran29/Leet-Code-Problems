function reverse(x: number): number {
    let split = x.toString().split('');
    let negative = x < 0 ? -1 : 1;
    if(negative === -1) {
        split.shift();
    }
    split.reverse();
    let result = Number(split.join('')) * negative;
    if(result < -2147483648 || result > 2147483647 ) {
        return 0;
    }
    return result;
};