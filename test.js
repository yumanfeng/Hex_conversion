/**
 * Created by Fmm on 2015/7/21.
 */
/**************
 * 字典
 **************/
var dic = new Array();
(function () {
    //0-9
    for (var i = 0; i < 10; i++) {
        dic[i] = i.toString();
    }
    //A-Z
    for (var j = "A".charCodeAt(0); i < 36; i++) {     //ascii码"A"=65
        dic[i] = String.fromCharCode(j);
        j++;
    }
    //a-z
    for (j = "a".charCodeAt(0); i < 62; i++) {
        dic[i] = String.fromCharCode(j);
        j++;
    }
}());

/**************
 ***求和函数
 *************/
function sum() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var hex1 = document.getElementById("hex1").value;
    var hex2 = document.getElementById("hex2").value;
    var hex3 = document.getElementById("hex3").value;

    var sum = nToTen(number1, hex1) + nToTen(number2, hex2);  //两个n进制的数字都转化为10进制再求和
    sum = tenToN(sum, hex3);
    alert("和为：" + sum + " 进制：" + hex3);
}

/****************
 * 10进制转换到n进制函数(正整数)
 ****************/
function tenToN(number, hex) {    //n进制的数number
    if (hex != 10) {
        var i = 0;
        var result = new Array();
        while (number > 0) {
            result[i] = dic[number % hex];
            number = parseInt(number / hex);   //取整数部分
            i++;
        }
        return result.reverse().join("");    //数组颠倒元素顺序->转化为无分隔符的字符串
    }
    return number;
}

/**************
 * n进制转换到10进制函数(正整数)
 **************/
function nToTen(number, hex) {  //number为字符串
    if (hex != 10) {
        var result = 0;
        var count = 0;
        number = number.split("");  //把数字先转换成字符串再装换成数组
        for (var i = number.length - 1; i >= 0; i--) {
            result += dic.indexOf(number[i]) * Math.pow(hex, count);
            count++;
        }
        return result;
    }
    return parseInt(number);
}

