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

////step1(my answer)
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
    