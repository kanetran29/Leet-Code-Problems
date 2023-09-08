// Source: https://leetcode.com/problems/3sum/

// Sum Matrix

// input: [-1,0,1,2,-1,-4]
/* Sum with others
     0  1  2  3  4  5
     ----------------
0 |  x -1  0  1 -2 -5
1 |  x  x  1  2 -1 -4
2 |  x  x  x  3  0 -3
3 |  x  x  x  x  1 -2
4 |  x  x  x  x  x -5
5 |  x  x  x  x  x  x

 */



function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    let map = new Map<number, string[]>();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            map.set(sum, [...(map.get(sum) ?? []), `${i},${j}`]);
        }
    }
    console.log(JSON.stringify(map));
    return result;
};