"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
var types_1 = require("skeleton/dist/types");
var fs = require("fs");
var world = 'world';
function hello(who) {
    if (who === void 0) { who = world; }
    return "Hello ".concat(who, "! ");
}
var getProducts = function () {
    try {
        // Lê o arquivo JSON de forma síncrona
        var fileContents = fs.readFileSync('base/products.json', 'utf-8');
        // Parseia o conteúdo JSON
        var products = JSON.parse(fileContents);
        // Exibe os produtos no console
        console.log(products);
    }
    catch (error) {
        // Caso ocorra erro ao ler o arquivo
        console.error('Erro ao ler o arquivo:', error);
    }
};
getProducts();
console.log(hello());
var a = types_1.ProductCategory.Moda;
