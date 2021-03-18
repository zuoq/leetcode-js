//题目描述：
//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

//示例
//输入: s = "abcabcbb"
//输出: 3 
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

//输入: s = "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。



const findAllChildStr = function(s) {
    let childStrArray = [];
    const map = new Map();
    const length = s.length;
    for(var i=0;i<length;i++) {
        map.set(i, s.charAt(i));
        for(var j=i;j<length;j++) {
            if(j===i) {
                childStrArray.push(map.get(i)); 
            }else {
                let oldStr = map.get(i);
                let newStr = oldStr+=s.charAt(j);
                childStrArray.push(newStr); 
                map.set(i, newStr);
            }
        }
    }
    return childStrArray;
};

//判断是否有重复字段
const isNoReportStr = function(str) {
    const length = str.length;
    const map = new Map();
    let isReport = false;
    for(var i=0;i<length;i++) {
        if(map.has(str.charAt(i))) {
            isReport = true;
            break;
        }else {
            map.set(str.charAt(i), str.charAt(i));
        }
    }
    return !isReport;
}

//寻找没有重复字段的子串
const findStrNoRepeat = function(strArray = []) {
    const noRepeatArray = [];
    strArray.forEach((item)=>{
        if(isNoReportStr(item)) {
            noRepeatArray.push(item);
        }
    });
    return noRepeatArray;
}

//step1(my answer)
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const length = (s || s.length) ? s.length : 0;
    if(!length) {
        return 0;
    }else {
        const allChildStrArr = findAllChildStr(s);
        const allNoReportStrArr = findStrNoRepeat(allChildStrArr);
        let maxNum = allNoReportStrArr.reduce((res,item)=>{
            return Math.max(item.length, res);
        },0); 
        return maxNum;
    }
};


 //step2(view good answer) 
 
 var lengthOfLongestSubstring = function(s) {
    // 滑动窗口初始化为一个空数组
    let arr = [];
    // 要返回的字符串的长度
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      // 使用 indexOf 判断是否在数组中出现过
      let index = arr.indexOf(s[i])
      // 如果出现过
      if (index !== -1) {
        // 从数组开头到当前字符串全部截取掉
        arr.splice(0, index + 1);
      }
      // 在窗口右边放进新的字符
      arr.push(s.charAt(i));
      // 更新下最大值
      max = Math.max(arr.length, max);
    }
    // 返回
    return max;
};

//step3(Reflection)
//使用了滑动窗口的算法思想，减少了计算
//滑动窗口法，可以用来解决一些查找满足一定条件的连续区间的性质（长度等）的问题。
//由于区间连续，因此当区间发生变化时，可以通过旧有的计算结果对搜索空间进行剪枝，这样便减少了重复计算，降低了时间复杂度。
//往往类似于“请找到满足xx的最x的区间（子串、子数组）的xx”这类问题都可以使用该方法进行解决。
