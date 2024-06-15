"use strict";
exports.__esModule = true;
var produto_1 = require("./produtos/produto");
console.log("rodando");
var produto = new produto_1.Produto("Regata", 100, "descricao regata M");
var produtoObj = {
    nome: "produto obj",
    descricao: "",
    preco: 0
};
var display = function () {
    var produtos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        produtos[_i] = arguments[_i];
    }
    console.table(produtos);
};
display(produto, produtoObj);
