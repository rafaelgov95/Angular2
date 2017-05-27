var minhaVar = 'Minha Variavel';
function minhaf(x, y) { return x + y; }
var num = 2;
var num2 = 4;
var num3 = 5;
var numeros = [1, 2, 4, 5];
numeros.map(function (x) { return x * 2; });
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) { return x + y; };
    return Matematica;
}());
//tipagem de variavel
var n1 = 'top';
