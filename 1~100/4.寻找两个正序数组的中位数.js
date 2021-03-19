//题目描述：
//给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
//请你找出并返回这两个正序数组的 中位数 。

//输入：nums1 = [1,3], nums2 = [2]
//输出：2.00000
//解释：合并数组 = [1,2,3] ，中位数 2

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const allNums = nums1.concat(nums2);
    const sortNums = allNums.sort(function(a,b) {
        return a - b;
    });

    const len = sortNums.length;
    if(!len) {
        return 0;
    }else {
        const isOdd = len % 2 === 0 ? false : true;
        if(isOdd) {
            return sortNums[(len-1)/2];
        }else {
            const num1 = sortNums[len/2-1];
            const num2 = sortNums[len/2];
            return (num1 + num2) / 2;
        }
    }
};

//比较简单的一道题目