// Source: https://leetcode.com/problems/3sum/


// lame solution O(nlogn)

/*
    4 cases to consider
        1. 0, 0, 0
        2. x, 0, -x
        3. x, x, -(2x)
        4. x, y, -(x + y)
*/

function threeSum___1(nums: number[]): number[][] {
    let map = new Map<number, number>();
    let unq: Record<string, number[]> = {};
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
            if (zeroCount === 3) {
                unq['0_0_0'] = [0, 0, 0]; // case 1
            }
        } else {
            map.set(nums[i], i);
        }
    }
    for (let i = 0; i < nums.length && nums[i] !== 0; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === 0) {
                if (map.has(-nums[i])) {
                    const c = [nums[i], nums[j], -nums[i]].sort();
                    const key = c.join('_');
                    unq[key] = c; // case 2
                }
                continue;
            }
            const sum = nums[i] + nums[j];
            const id = map.get(-sum);
            if (id === undefined) continue;

            const case3 = nums[i] === nums[j];
            const case4 = nums[i] !== nums[j] && id !== i && id !== j;

            if (case3 || case4) {
                const c = [nums[i], nums[j], -sum].sort();
                const key = c.join('_');
                unq[key] = c;
            }
        }
    }
    return Object.values(unq);
};

// 2 pointers solution O(nlogn)
function threeSum___2(nums: number[]): number[][] {
    const result: number[][] = [];
    const uniqueTriplets = new Set<string>();

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            const target = -nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === target) {
                    const triplet = [nums[i], nums[left], nums[right]].sort();
                    const tripletKey = triplet.join(',');

                    if (!uniqueTriplets.has(tripletKey)) {
                        result.push(triplet);
                        uniqueTriplets.add(tripletKey);
                    }

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

