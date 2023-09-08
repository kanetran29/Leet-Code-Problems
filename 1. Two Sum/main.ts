// Source: https://leetcode.com/problems/two-sum/

// Solution 1: Faster but more memory
function twoSum__1(nums: number[], target: number): number[] {
    let result: number[] = [];
    let map = new Map<number, number>();
    nums.forEach((value, index) => {
        let diff = target - value;
        if (map.has(diff)) {
            result = [index, map.get(diff)!];
            return;
        }
        map.set(value, index);
    });
    return result;
};

// Solution 2: Slower but less memory

function twoSum__2(nums: number[], target: number): number[] {
    let result: number[] = [];
    nums.forEach((value, index) => {
        const id = nums.indexOf(target - value);
        if (id !== -1 && id !== index) {
            result = [index, id];
            return;
        }
    });
    return result;
};