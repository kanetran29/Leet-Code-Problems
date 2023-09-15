function lengthOfLongestSubstring(s: string): number {
    let l = 0, r = 0;
    let result = 0;
    const seen = new Map<string, number>();
    while (r < s.length) {
        const c = s.charAt(r);
        const id = seen.get(c);
        if(id >= l) {
            result = Math.max(result, r - l);
            l = id + 1;
        }
        seen.set(c, r);
        r++;
    }
    return Math.max(result, (r - l));
};