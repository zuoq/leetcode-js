//题目描述：
//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
//你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//你可以按任意顺序返回答案。

//示例：
//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
//因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

//step1(my answer)
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    var length = nums.length;
    var index1,index2;
    for(var i=0;i<length;i++) {
        for(var j=i+1; j<length;j++) {
            if(nums[i] + nums[j] === target) {
               index1 = i;
               index2 = j;
               break;
           }
        }
        if(index1 || index2) {
           break;
        }
   }

   return [index1,index2];
};
//采用了最暴力的解法（看到题目瞬间想到的答案,嵌套循环，性能低下）


//step2(view good answer)
var twoSum = function(nums, target) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
      let dif = target-nums[i];
      if (temp[dif] !== undefined) {
        return [temp[dif], i]
      }
      temp[nums[i]] = i;
    }
};

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let dif = target-nums[i]
        if (map.has(dif)) {
            return [map.get(dif), i];
        }
        map.set(nums[i], i);
    }
};


//step3(Reflection)
//第二种解法用动态数组存放数据，满足条件的第二个元素出现时，其互补元素的下标(dif)对应的值一定已经被赋值;
//第三种解法和碟中思路类似，但是使用Map, MDN上介绍了Map的使用场景为(在频繁增删键值对的场景下表现更好)，入参nums的数组长度较长的时候，Map的性能应该是最优的；