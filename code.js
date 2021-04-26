var x = 0;
var y = 0;
var z = 0;
function sum(){
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    z = x + y;
    document.getElementById('result').innerHTML=z;

}
function minus(){
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    z = x - y;
    document.getElementById('result').innerHTML=z;
}
function fois(){
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    z = x * y;
    document.getElementById('result').innerHTML=z;
}
function sur(){
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    z = x / y;
    document.getElementById('result').innerHTML=z;
}
