/**
 * Created by Fmm on 2015/7/21.
 */
/**************
 * 字典
 * dic=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 **************/

var dic = [];
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
 * 10进制转换到n进制函数(正数)
 ****************/
function tenToN(number, hex) {    //hex进制的数number

    if (hex != 10) {           //非10进制转换10进制
        if (parseInt(number) == number) {      //是整数
            return tenToNInt(number);
            //alert(tenToNInterger(number));   //
        }
        else {               //是浮点数
            var result = [];
            result[0] = tenToNInt(parseInt(number));              //浮点数的整数部分
            result[1] = tenToNDecimal(number - parseInt(number));      //浮点数的小数部分（以整数形式表示非小数形式）
            //alert(result.join("."));   //
            return result.join(".");
        }
    }
    else {                        //10进制转换10进制
        //alert(number);    //
        return number;
    }

    //整数部分的10进制转换到n进制
    function tenToNInt(number) {
        var i = 0;
        var result =[];
        while (number > 0) {
            result[i] = dic[number % hex];
            number = parseInt(number / hex);   //取整数部分
            i++;
        }
        return result.reverse().join("");    //数组颠倒元素顺序->转化为无分隔符的字符串
    }

    //小数部分的10进制转换到n进制
    function tenToNDecimal(number) {
        var i = 0;
        var result = [];
        while (number != 0 && i < 10) {           //控制最多10位小数
            result[i] = dic[parseInt(number * hex)];
            number = number * hex - parseInt(number * hex);
            i++;
        }
        for (i = result.length - 1; result[i] == 0; i--) {       //删去小数部分尾数为0的元素
            result.pop();
        }
        return result.join("");
    }

}

/**************
 * n进制转换到10进制函数(正数)
 **************/
function nToTen(number, hex) {            //number为字符串
    if (hex != 10) {                //非10进制转换10进制
        if (number.indexOf(".") == -1) {         //是整数
            return nToTenInt(number);
            //alert(nToTenInt(number));   //
        }
        else {                 //是浮点数
            var result = number.split(".");
            var result1 = nToTenInt(result[0]);              //浮点数的整数部分
            var result2 = nToTenDecimal(result[1]);      //浮点数的小数部分（以小数形式表示）
            //alert(result1+result2);   //
            return result1 + result2;
        }
    }
    else {                     //10进制转换10进制
        //alert(parseInt(number));   //
        return parseInt(number);
    }
    //整数部分的n进制转换到10进制
    function nToTenInt(number) {
        var result = 0;
        var count = 0;
        number = number.toString().split("");  //把数转换成字符串->转换成数组
        for (var i = number.length - 1; i >= 0; i--) {
            result += dic.indexOf(number[i]) * Math.pow(hex, count);
            count++;
        }
        return parseInt(result);
    }

    //小数部分的n进制转换到10进制
    function nToTenDecimal(number) {
        var result = 0;
        var count = 1;
        number = number.toString().split("");  //把数转换成字符串->转换成数组
        for (var i = 0; i <= number.length - 1; i++) {
            result += dic.indexOf(number[i]) * Math.pow(hex, -count);
            count++;
        }
        return parseFloat(result);       //去掉小数点后多余的0
        //return result;
    }
}


/***************
 * 进制转换函数
 ***************/
function change(){
    var number5 = document.getElementById("number5").value;
    var hex5 = document.getElementById("hex5").value;
    var hex4 = document.getElementById("hex4").value;
    if(hex5 == 10){

    }
    else{
        number5 = nToTen(number5,hex5);      //用户输入的数转换为10进制
        if(hex4 == 10){
            $(document).ready(function(){
                $("#number4").val(number5);
            });
        }
        else{

        }
    }


}






