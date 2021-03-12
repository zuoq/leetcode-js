//题目描述：
//给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
//请你将两个数相加，并以相同形式返回一个表示和的链表。
//你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

//示例：
//输入：l1 = [2,4,3], l2 = [5,6,4]
//输出：[7,0,8]
//解释：342 + 465 = 807


//step1(my answer)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// function listToArray(head) {
//     if(!head) {
//         return [];
//     }
//     var result = [];
//     var p = head;
//     while(p) {
//         result.push(p.value);
//         p = p.next;
//     }
//     return result
// }
function arrayToList(ary) {
    if(ary.length === 0) {
        return null;
    }
    var nodes = [];
    
    for(var i = 0; i < ary.length; i++) {
        var node = {};
        node.value = ary[i];
        node.next = null;
        nodes.push(node);
    }

    for(var i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1]
    }
    return nodes[0]
}

// var addTwoNumbers = function(l1, l2) {
//     var arrayL1 = listToArray(l1);
//     var arrayL2 = listToArray(l2);
//     var len1 = arrayL1.length;
//     var len2 = arrayL2.length;
//     var len = len1 > len2 ? len1 : len2;
//     var result = [];
//     for(var i=0;i<len;i++) {
//         var num1 = arrayL1[i] ? arrayL1[i] : 0;
//         var num2 = arrayL2[i] ? arrayL2[i] : 0;
//         var added = result[i+1] ? result[i+1] : 0;
//         var sum = num1 + num2 +added;
//         if(sum>=9) {
//             result[i+1] = 1;
//             result[i] = sum - 10;
//         }else {
//             result[i] = sum;
//         }
//     }
//     return arrayToList(result);
// };

var addTwoNumbers = function(l1, l2) {
    var len1 = l1.length;
    var len2 = l2.length;
    var len = len1 > len2 ? len1 : len2;
    var result = [];
    for(var i=0;i<len;i++) {
        var num1 = l1[i] ? l1[i] : 0;
        var num2 = l2[i] ? l2[i] : 0;
        var added = result[i+1] ? result[i+1] : 0;
        var sum = num1 + num2 +added;
        if(sum>=9) {
            result[i+1] = 1;
            result[i] = sum - 10;
        }else {
            result[i] = sum;
        }
    }
    return arrayToList(result);
};

//step2(view good answer)
//因为输入输出都是链表结构，其他的大好在提交的时候也会报错

//step3(Reflection)
//对链表结构的理解，js如何表示链表结构